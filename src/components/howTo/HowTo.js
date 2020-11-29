import React from 'react'

import HelpForm from './HelpForm'

export default function About() {
    return (
        <div className="outer-container">
            <div className="inner-container about-cell">
                <h3>How to use Flashmachine</h3>
            
                    <ul className="how-to-list">
                        <li>Enter words as you read them, into the text box on the main page.</li>
                        <li>When you've finished reading, click submit.</li>
                        <li>You'll receive a list of meanings for each word.</li>
                        <li>Select and edit the meanings to make the flashcard content you want.</li>
                        <li>Download your flashcard content and import into Anki!</li>
                    </ul>

                <p>
                    The flashcards must be imported using the desktop version of Anki.
                    Flashmachine produces cards suited to the 'Basic and Reverse' format of cards that Anki comes with.
                </p>
            </div>
            <div className="inner-container about-cell">
                <h3>Report Errors</h3>
                <p>
                    While using Flashmachine, you may come across word definitions that include stray punctuation or nonsensical lines.
                </p>
                <p>
                    Whilst care has been taken to eliminate most of this, it may still be possible to receive results such as these.
                    If this happens to you, please submit the word so that it can be investigated.
                </p>
                
                <HelpForm/>
            
            </div>
        </div>
    )
}
