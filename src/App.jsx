import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [password, setPassword] = useState(" ");
  const [length, setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [character , setcharacter] = useState(false);


  function generatePassword(length){

    password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) {
      str = str + "0123456789";
    }
    if(character) {
      str = str + "!@#$%^&*()`~{}[]'";
    }

    for(let i=0; i<length ; i++){
      let index = Math.floor(Math.random()*str.length);
      password +=str[index];
    } 
    setPassword(password);
  }

  const handleLength = (event) =>{
    setLength(event.target.value);
  }

  const copyText = () => {
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className='card'>
        <div className='mainBox'>
          <h1>Password Generator</h1>
          <div className='passGenerator'>
            <p onClick={copyText} id='passContent'>{password}</p>
            <p className='suggestion'>click on text to copy text</p>
          </div>
          <div className='passAdjust'>

            <div className='lengthAdder'>
              <input id='passLength' 
                type='range' 
                min={8} 
                max={20}
                value={length}
                onChange={handleLength} />
              <label htmlFor='passLength'>&nbsp; Length({length})</label>
            </div>
            <div className='numberAdder'>
              <input onClick={() => setNumber(!number)} type='checkbox' id='numberAdd' />
              <label htmlFor='numberAdd'>Number</label>
            </div>
            <div className='charAdder'>
              <input onClick={() => setcharacter(!character)} type='checkbox' id='charAdd' />
              <label htmlFor='charAdd'>Character</label>
            </div>
            <button onClick={() => generatePassword(length)} className='myButton'>Get Password</button> 
          </div>
        </div>
      </div>

    </>
  )
}

export default App
