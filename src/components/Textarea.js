import React,{useState} from "react";


export default function Textarea(props) {
    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const toLowercase = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","success")
  }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    // const readText= ()=>{
    //   const speech = new SpeechSynthesisUtterance();
    //   let message = document.getElementById("mybox").value;
    //   speech.lang= 'eng';
    //   speech.text = message;
    //   speech.rate =2;
    //   window.speechSynthesis.speak(speech);
    // }
    const clearText = ()=>{
      setText("");
      props.showAlert("cleared text","success")
    }
     const [text,setText]= useState("");

     const countWord = (content) => {
      if(content ===""){
        return 0;
      }
      else{
       let str= content.trim();
       return str.split(/\s+/).length
      }
  }
    
  return (
    <>
    <div className="mb-3 my-3" style={{color:props.mode==="light"? "black":"white"}}>
        <h1>{props.heading}</h1>
      <textarea
        className="form-control "
        
        value = {text}
        onChange={handleChange}
        id="mybox"
        rows="8"
        style={{backgroundColor:props.mode==="light"? "white":"grey",color:props.mode==="light"? "black":"white"}}
      ></textarea>
      <button className="btn btn-primary margin mx-2" onClick={handleClick} >Convert to Uppercase</button>
      <button className="btn btn-primary margin mx-2" onClick={toLowercase} >Convert to Lowercase</button>
      <button className="btn btn-primary margin mx-2" onClick={clearText} >Clear Text</button>
      {/* <button className="btn btn-primary margin mx-2" onClick={readText} >Read Text</button> */}
    </div>
    <div className="container" style={{color:props.mode==="light"? "black":"white"}}>
      <h2>Your Text Summary</h2>
      <p>{countWord(text)} words and {text.length} characters</p>
      <p>{0.008 * text.length} minutes require to read</p>
    </div>
    <div className="container" style={{color:props.mode==="light"? "black":"white"}}>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  );
}
