import React from 'react'

export default function About() {
    return (
        <div className="outer-container">
            <div className="inner-container about-cell">
                <h3>How to use Flashmachine</h3>
                <p>
                    <ul className="how-to-list">
                        <li>Enter words as you read them, into the text box on the main page.</li>
                        <li>When you've finished reading, click submit.</li>
                        <li>You'll receive a list of meanings for each word.</li>
                        <li>Select and edit the meanings to make the flashcard content you want.</li>
                        <li>Download your flashcard content and import into Anki!</li>
                    </ul>

                </p>
            </div>
        </div>
    )
}
