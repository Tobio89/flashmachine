import React, {useState, useEffect} from 'react'

import MainFormDisplay from "./MainFormDisplay"
// import FormResults from "./FormResults"

import dictResultParser from "./dictResultParser"

export default function MainFormLogic() {

    const [wordList, setWordList] = useState([])
    const [displayValue, setDisplayValue] = useState('')
    const [searchResultWords, setSearchResultWords] = useState([])
    const [preventEntry, setPreventEntry] = useState(false)
    const [flashCardContents, setFlashCardContents] = useState([])

    function makeRequestForWords() {

        // setSearchResultWords(null)


        console.log('Requesting...')
        console.log(wordList)

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const naverRequestURLPrefix = 'https://en.dict.naver.com/api3/enko/search?query='
        const naverRequestURLSuffix = '&m=pc&range=all&shouldSearchVlive=true&lang=en'

        if (wordList === []) {
            console.log('Empty Query Terms')
        } else {
       
           
            for (let i = 0;i<wordList.length; i++) {

                let word = wordList[i]

                console.log(`Working on word '${word}...' `)
                const corsRequestURL = proxyUrl +  naverRequestURLPrefix + word + naverRequestURLSuffix

                // fetch(corsRequestURL)
                // .then(response => response.json())
                // .then(data => dictResultParser(data, word))
                // .then((result) => {
                //     const resultsToAdd = [...searchResultWords, result]
                //     setSearchResultWords(resultsToAdd)
                // })

                async function fetchWordData() {
                    const response = await fetch(corsRequestURL);
                    const jsonifiedData = await response.json();
                    const parsedData = dictResultParser(jsonifiedData, word)
                    return parsedData;
                }
                fetchWordData().then((wordData) =>{
                    setSearchResultWords(null)
                    const resultsToAdd = [...searchResultWords, wordData]
                    setSearchResultWords(resultsToAdd)
                })

            }//Endfor
        }//Endif   
    } // End of makeRequestForWords

    function handleWordEntry(event){

        console.log('Word entry event triggered')
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
    // useEffect(() => {
    //     console.log('Clear result elements')
    //     resultsDisplayElements = []

    // }, [searchResultWords])


    const resultsDisplayElements = searchResultWords.map(item => {

        return (
            <div>
                <h3>{item.queryWord}</h3>
                <textarea value={item.meanings} />
            </div>
        )

    })


    return (
        <div>
            <MainFormDisplay 
                wordList={displayValue} 
                handleChange={handleWordEntry} 
                makeRequest={makeRequestForWords}    
            />

            {resultsDisplayElements}
        </div>
    )
}
