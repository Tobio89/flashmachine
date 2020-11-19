import React from 'react'

export default function MainFormDisplay(props) {

    return (
        <div className="word-entry-section">


                <h3>Your Word List:</h3>

                <textarea 
                    className="word-entry-box"
                    value={props.wordList}
                    name="wordList"
                    placeholder="Add vocab words here!"
                    onChange={props.handleChange}
                
                />
                <br/>
                <label for='includeHanja'>Include Hanja if available</label>
                <input type="checkbox" name="includeHanja" onChange={props.handleHanja}/>
                <br/>
                <button onClick={props.makeRequest}>Get Definitions</button>



        </div>
    )
}
