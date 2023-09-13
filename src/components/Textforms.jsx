import React, {useState} from 'react'
import './Textforms.css'

export default function Textforms(props) {

const [text, setText] = useState("");
const handleUpClick = ()=>{
    // console.log("Uppercase Clicked")
    setText(text.toUpperCase())
    if (text==="") {
        props.showAlert("Please enter text to perform this operation", "danger")
    }
    else{
     props.showAlert("Converted to upper case", "success")
    }
}
const handleLowClick = ()=>{
    // console.log("Uppercase Clicked")
    setText(text.toLowerCase())
    if (text==="") {
        props.showAlert("Please enter text to perform this operation", "danger")
    }
    else{
     props.showAlert("Converted to lower case", "success")
    }

}
const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges()
    if (text==="") {
        props.showAlert("Please enter text to perform this operation", "danger")
    }
    else{
     props.showAlert("Copied to clipboard", "success")
    }

}
const handleResetClick = ()=>{
    setText("");
    if (text==="") {
        props.showAlert("Textbox is empty", "warning")
    }
    else{
     props.showAlert("Text Reset", "success")
    }
}

const handleOnChange = (event)=>{
setText(event.target.value)
}

const handleRemoveSpace = ()=>{
    setText(text.replace(/\s{2,}/g, ' ').trim())
    if (text==="") {
        props.showAlert("Please enter text to perform this operation", "danger")
    }
    else{
     props.showAlert("Removed extra spaces", "success")
    }
}


  return (
    <>
    <div className="mb-3 mt-5 container">
        <h1 className='mb-4'>{props.heading}</h1>
        <textarea className="form-control"style={{backgroundColor : props.mode==="light"? "white":"#2b1b50", color : props.mode==="light" ? "black": "white"}}  value={text} placeholder='Enter text here'  onChange={handleOnChange} id="myBox" rows="10"></textarea>
        <button disabled={text.length==0} onClick={handleUpClick} className="btn btn-primary mt-3">Convert to Uppercase</button>
        <button disabled={text.length==0} onClick={handleLowClick} className="btn btn-primary mt-3 ms-5">Convert to Lowercase</button>
        <button disabled={text.length==0} onClick={handleRemoveSpace} className="btn btn-primary mt-3 ms-5">Remove Extra Spaces</button>
        <button disabled={text.length==0} onClick={handleCopyClick} className="btn btn-warning mt-3 ms-5">Copy Text</button>
        <button disabled={text.length==0} onClick={handleResetClick} className="btn btn-danger mt-3 ms-5">Reset</button>
    </div>
    <div className="container mt-5">
        <h3>Your text summary</h3>
        <p> {text.split(/\s+/).filter((element)=>{return element.length !=0}).length} Words and  {text.length} Characters</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !=0}).length*0.008} Minutes to Read</p>
        <h3>Text Summary</h3>
        <p>{text.length>0? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}
