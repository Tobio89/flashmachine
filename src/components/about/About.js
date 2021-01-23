import React from 'react'

export default function About() {
    return (
        <div className='outer-container'>
            <div className="inner-container about-cell">
                <div>
                    <h3>About Flashmachine:</h3>
                    <p>Flashmachine is a word translation and flashcard writing tool</p>
                    <p>The front-end app you are using now is written in React.js</p>
                    <p>Flashmachine obtains word translation data from a back-end API made using the Python API library 'FastAPI'.</p>
                    <p>It scrapes the data upon request, bypassing the need for a database.</p>
                </div>
                <br/>
                <div>
                    <h3>About the Creator:</h3>
                    <p>Tobias S is working as a Front End developer for a blockchain company, since Dec 2020.</p>
                    <p>He has an M.A in Animation and a B.A in Multimedia</p>
                    <p>He was an English teacher in Korea for 5 years. He is married and has a son who is incredibly cute.</p>
                    <p>He likes 90's video games, coffee, and long walks outdoors.</p>
                    <hr/>
                    <h4>Other Projects</h4>
                    
                    <p>
                        <ul className="about-list">
                            <li><a href="https://bruceji7.github.io">My portfolio website</a> on GitHub.</li>
                            <li><a href="https://auto-worksheet.herokuapp.com/about">Auto-Worksheet</a>: An ESL worksheet template generator, that writes sheets based on news articles and other text.</li>
                            <li><a href="https://github.com/BruceJi7">Tobias S on Github</a>: Other miscellaneous projects written in Python.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
