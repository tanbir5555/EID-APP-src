import React,{useState} from 'react'
import logo from './images/goldMoon.png';
import './App.css';
import Massage from './components/massage'
import Name from './components/Name'

function App() {

 let [name,setName] =useState({display:"none"})
 setTimeout(() => {
  setName(()=>{
    return ({
      display:"block",
    })
  })
 }, 2000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">
       <Massage/>
        </p>
       
        <div style={name} className='h3'> <Name/></div>
        <div class="night">
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div> <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div></div>
      </header>
    </div>
  );
}

export default App;
