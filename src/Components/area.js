import React, { useState } from 'react'

export default function Area(props) {
    const [text, settext] = useState("")

    const textchange = (event) => {
        settext(event.target.value)
    }

    const toupper = () => {
        let u = text.toUpperCase();
        settext(u);
    }

    const tolower = () => {
        let l = text.toLowerCase();
        settext(l);
    }

    const toclear = () => {
        let c = "";
        settext(c);
    }

    const tocopy = () => {
        let t = document.getElementById("box");
        t.select()
        navigator.clipboard.writeText(t.value);
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
    }

    return (
        <div>

            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="box" value={text} onChange={textchange} rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} type="button" class="btn btn-lg btn-primary mx-3" onClick={toupper}>Uppercase</button>
            <button disabled={text.length === 0} type="button" class="btn btn-lg btn-primary mx-3" onClick={tolower}>Lowercase</button>
            <button disabled={text.length === 0} type="button" class="btn btn-lg btn-primary mx-3" onClick={tocopy} >Copy</button>
            <button disabled={text.length === 0} type="button" class="btn btn-lg btn-primary mx-3" onClick={toclear} >Clear</button>
            <button disabled={text.length === 0} type="button" class="btn btn-lg btn-primary mx-3" onClick={handleExtraSpaces} >Remove extra spaces</button>
            <div className="container my-3">
                <h2>Preview</h2>
                <h6>{text}</h6>
                <h5>No of word:{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</h5>
                <h5>No of characters:{text.length}</h5>
            </div>
        </div>
    )
}
