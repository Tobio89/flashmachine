import React, {useState} from "react";

export default function MyForm() {

    const [status, setStatus] = useState("")
    
    function submitForm(ev) {

        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    } //End of 'submitForm()'

    return (
            <form
                className="contact-form"
                onSubmit={submitForm}
                action="https://formspree.io/f/mjvpeozo"
                method="POST"
            >

                <textarea className="input-box help-box" name="problemWord" placeholder="Troublesome Word" required/>
                <textarea className="input-box help-box help-box-large" name="problemDescription" placeholder="Description of results" required/>

                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="help-button">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
    );
    



}