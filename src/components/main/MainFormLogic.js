import React, {useState, useEffect} from 'react'

import MainFormDisplay from "./MainFormDisplay"
// import FormResults from "./FormResults"

import makeParagraphContent from "./dictResultParser"

export default function MainFormLogic() {

    const [wordList, setWordList] = useState([])
    const [displayValue, setDisplayValue] = useState('')
    const [searchResultWords, setSearchResultWords] = useState([])
    const [includeHanja, setIncludeHanja] = useState(false)
    const [preventEntry, setPreventEntry] = useState(false)
    const [flashCardContents, setFlashCardContents] = useState([])

    function makeRequestForWords() {

        setSearchResultWords(null)


        console.log('Requesting...')
        console.log(wordList)

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const naverRequestURLPrefix = 'https://en.dict.naver.com/api3/enko/search?query='
        const naverRequestURLSuffix = '&m=pc&range=all&shouldSearchVlive=true&lang=en'

        const APIUrl = 'http://localhost:8000/words/'

        if (wordList === []) {
            console.log('Empty Query Terms')
        } else {

            const wordQueryString = wordList.join('_')

            const requestURL = APIUrl + wordQueryString
            fetch(requestURL).then(response => response.json())
            .then((data) => {
                
                setSearchResultWords([...data])

                const paragraphFormat = makeParagraphContent(data, includeHanja) //Returns an object 
                console.log('Received the following:')
                console.log(paragraphFormat)
                setFlashCardContents(paragraphFormat)
            })
          
 
        }//Endif   
    } // End of makeRequestForWords

    function handleWordEntry(event){

        const value = event.target.value

        const currentWordList = wordList
        const currentDisplayValue = displayValue

        const splitValue = value.split('\n')
        
        if (splitValue.length > 30) {
            console.log("The list is capped at 30")
            setPreventEntry(true)
            setWordList(currentWordList)
            setDisplayValue(currentDisplayValue)

        } else {
            
            setPreventEntry(false)
            setWordList(splitValue)
            setDisplayValue(value)
        }
    }

    function handleHanja(event){

        setIncludeHanja(event.target.checked)

    }

    function handleFlashEdit(event){
        const {name, value} = event.target

        let currentFlashContent = flashCardContents

        const editedObject = {word:name, paragraph:value}

        const updatedFlashContent = {...currentFlashContent, [name]:editedObject}

        setFlashCardContents(updatedFlashContent)
    }

    function makeTextFile () {

        const flashcardString = makeFlashcardString()

        const element = document.createElement("a");

        const file = new Blob([flashcardString], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "anki_flashcards.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }

    function makeFlashcardString() {

        const keys = Object.keys(flashCardContents)

        const paragraphsArray = keys.map(key => {

            const word = flashCardContents[key].word
            let paragraph = flashCardContents[key].paragraph


            paragraph = paragraph.replace(/"/g,'""')

            return `${word};"${paragraph}"`
        })

        const flashcardString = paragraphsArray.join('\n')
        
        return flashcardString

    }

    // Display the flashcard contents
    let editableContents = null
    if (flashCardContents) {

        const keys = Object.keys(flashCardContents)

        editableContents = keys.map(key => {

            return (

                <div className="flash-cell" key={key}>

                    <p className="flash-title">{flashCardContents[key].word}</p>

                    <textarea 
                        className="flash-edit-box"
                        name={flashCardContents[key].word} 
                        value={flashCardContents[key].paragraph}
                        onChange={handleFlashEdit}
                    />

                </div>

            )
        })
    } //Endif
    //End of display contents section

    return (
        <div className="inner-container">
            <MainFormDisplay
                wordList={displayValue} 
                handleChange={handleWordEntry} 
                makeRequest={makeRequestForWords} 
                handleHanja={handleHanja}   
            />
            
            
            <div className="flash-content-section">

                {
                    editableContents.length > 0 ? 
                        <div> 
                            <h3>
                                Your flashcard contents:
                            </h3>
                            {editableContents} 
                            <p>
                                <button onClick={makeTextFile}>Download Flashcards</button>
                            </p>
                        </div>

                        : // Else

                        <p>Enter words above!</p>
                }
                
            </div>
        </div>
    )
}
