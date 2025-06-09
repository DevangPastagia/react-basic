import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charrAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  // Functions

  // Function to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = lowerCase + upperCase;
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    if (numberAllowed) {
      str += numbers;
    }

    if (charrAllowed) {
      str += specialChars;
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      if (randomIndex >= str.length) {
        i--;
        continue;
      }
      pass += str[randomIndex];
    }

    setPassword(pass);

  }, [length, numberAllowed, charrAllowed, setPassword]);


  // Function to copy password to clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password).then(() => {
    }).catch((err) => {
      alert("Failed to copy password.");
    });
  }, [password])

  // Use Effects
  useEffect(() => { passwordGenerator(); }, [length, numberAllowed, charrAllowed, passwordGenerator]);


  return (
    <>
      <div className='w-full h-screen flex-col justify-items-center inline-block content-center'>
        <div className='max-w-md mx-auto shadow-md rounded px-4 py-8 text-orange-500 bg-gray-800 space-y-2' >
          <h1 className='text-4xl text-center mb-3' >Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4' >
            <input type="text" ref={passwordRef} value={password} className='bg-white outline-none w-full py-1 px-3' placeholder='Password' readOnly />
            <button className='bg-blue-400 text-white px-3' onClick={copyToClipboard} >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1' >
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
                setLength(e.target.value)
              }} />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1' >
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1' >
              <input type="checkbox" defaultChecked={charrAllowed} id='charInput' onChange={() => setCharAllowed((prev) => !prev)} />
              <label htmlFor="charInput">Character</label>
            </div>
          </div>
          <div className='flex justify-end gap-x-1' >
            <button className='bg-blue-400 text-white px-3 rounded-lg px-8 py-2 text-xl cursor-pointer' onClick={passwordGenerator} >Refresh</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
