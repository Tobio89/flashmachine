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

                <p className="hanja-checkbox-p">
                    
                    <input type="checkbox" name="includeHanja" onChange={props.handleHanja}/>
                    <label htmlFor='includeHanja'>Include Hanja if available</label>

                </p>
                <p className="button-p">
                    <button onClick={props.makeRequest}>Get Definitions</button>
                </p>


        </div>
    )
}
