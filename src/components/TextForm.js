import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handledownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Textarea Cleared", "success");
    }
    const handlespeakClick = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    //setText()
    return (
        <>
            <div className='conatiner' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handledownClick}>Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlespeakClick}>Speak</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear</button>
            </div>
            <div className='conatiner my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>Characters = {text.length}</p>
                <p>Words={text.split(" ").length}</p>
            </div>
        </>
    )
}
