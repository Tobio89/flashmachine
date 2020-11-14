import React from 'react'

export default function FormResults(props) {

    console.log('Display:')
    console.log(props.results)


    if (props.results) {


        const paragraphContent = props.results.map(item => {

            const itemSubArray = item.meanings
            const displayedMeanings = itemSubArray.map(dicEntry => {

                return (
                <div>

                    <p>{dicEntry.meaning}</p>

                </div>
                )

            })

            return(
                <div>
                    <h4>{item.queryWord}</h4>
                    <div>{displayedMeanings}</div>
                </div>

            )
        })
        

        return (
            <div>
                {paragraphContent}
            </div>
        )
    } else {
        return (
            <p>Search for words!</p>
        )
    }
}
