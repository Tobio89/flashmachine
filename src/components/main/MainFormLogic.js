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

            console.log(wordQueryString)
            const requestURL = APIUrl + wordQueryString
            fetch(requestURL).then(response => response.json())
            .then((data) => {
                
                setSearchResultWords([...data])

                const paragraphFormat = makeParagraphContent(data, includeHanja)
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

    let editableContents = null
    if (flashCardContents) {
        editableContents = flashCardContents.map(item => {

            const key = Object.keys(item)[0]
            
            const title = item[key].word
            const paragraph = item[key].paragraph

            
            return (

                <div>
                    <h4>{title}</h4>
                    <textarea name={title} value={paragraph}/>

                </div>

            )

        })
    }


    return (
        <div>
            <MainFormDisplay 
                wordList={displayValue} 
                handleChange={handleWordEntry} 
                makeRequest={makeRequestForWords} 
                handleHanja={handleHanja}   
            />
            
            

            {editableContents}
        </div>
    )
}
