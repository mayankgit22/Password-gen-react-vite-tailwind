import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'
import './index.css'


function App() {
  const [length, setLength] = useState(30);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "~!@#$%^&*()+|?<>[]{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);

    // console.log(pass);

  }, [length, numberAllowed, symbolAllowed, setPassword])
   const passwordRef=useRef(null)
  const copyClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, symbolAllowed, passwordGenerator])

  //  let passwor=passwordGenerator();
  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center  text-white'>
        <div className='flex flex-col w-2/4 h-1/3 mt-20 bg-gray-800 rounded-xl  '>
          <h1 className='text-3xl font-poppins text-center text-white mt-6 mb-4 '>Password Generator</h1>
          <div className='bg-slate-600 rounded-b-xl w-full h-full'>
            <div className='flex justify-center items-center shadow rounded-lg overflow-hidden mb-4 mt-4'>  <input type="text" ref={passwordRef} value={password} readOnly name="pass" className=' text-orange-700 text-xl ml-2 mt-1 outline-none w-full h-10 py-1 px-3 rounded-lg' />
              <button onClick={copyClipBoard} className='outline-nonen cursor-pointer hover:bg-blue-600  transition-ease-in duration-100 bg-blue-700  h-10  w-1/6 text-white px-3 py-0.5 shrink-0 text-lg ml-2 mr-5 rounded-lg'>copy</button></div>
            <div className='bg-slate-900 p-5 rounded-b-lg  w-full h-2/3 flex gap-1 items-center text-orange-400 font-bold text-2xl'>
              <input type="range" min={6} max={30} name='length' onChange={(e) => setLength(e.target.value)} />
              <label htmlFor="length"  >length:({length})</label>
              <input type="checkbox" defaultChecked={numberAllowed} className='ml-2 ' name="numberCheck" onChange={() => setNumberAllowed((prev) => !prev)} />
              <label htmlFor="numberCheck">Numbers</label>
              <input type="checkbox" defaultChecked={symbolAllowed} className='ml-5 ' onChange={() => setSymbolAllowed((next) => !next)} name="symbolCheck" />
              <label htmlFor="symbolCheck">Symbols</label>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
