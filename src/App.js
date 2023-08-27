
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



function App() {
  const[Mode,setMode] = useState("light")
  let toggleMode =()=>{
    if(Mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#021531";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success")
    }
  }
  const[alert,setalert] = useState(null)
  const showAlert= (message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
  }
  setTimeout(()=>{
    setalert(null)},1500);
  return (
    <>
   <Router>
    <Navbar title="Textutils" aboutText="About" toggleMode={toggleMode} mode={Mode} />
    <Alert alert={alert} />
    <div className="container margin">
   <Routes>
      <Route  path='/' element={
      <Textarea heading="Enter text below to analyze" mode={Mode} showAlert={showAlert}/>}>
       </Route>
    <Route path='/About' element={<About/>}></Route>
      
   
    </Routes>
    </div>
    </Router> 
    </>
    
  );
}

export default App;
