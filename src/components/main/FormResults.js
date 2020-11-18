import React from 'react'

export default function FormResults(props) {

    if (props.results) {


       
        
        const textAreaComponents = []

        for (let i=0; i<props.results.length;i++) {

            let resultItem = props.results[i]

            let itemMeanings = []

            resultItem.meanings.forEach(m => {
                itemMeanings.push(m.meaning)
            })


            console.log(itemMeanings)

            let valueString = itemMeanings.join('\n')

            textAreaComponents.push(

                <p><textarea name={i} value={valueString}
                /></p>

            )



        }
        console.log(textAreaComponents)

        }


        return (
            <div>
                <form>
                {textAreaComponents}
                </form>
            </div>
        )
    }


