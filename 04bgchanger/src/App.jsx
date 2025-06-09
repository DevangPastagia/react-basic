import { useState } from "react";
import Button from "./components/Button";

function App() {

  const [bgColor, setBgColor] = useState('bg-olive-500');
  const buttons = [
    {
      name: 'Red',
      color: 'text-white',
      bgColor: 'bg-red-500',
      onClick: () => setBgColor('bg-red-500')
    },
    {
      name: 'Green',
      color: 'text-white',
      bgColor: 'bg-green-500',
      onClick: () => setBgColor('bg-green-500')
    },
    {
      name: 'Blue',
      color: 'text-white',
      bgColor: 'bg-blue-500',
      onClick: () => setBgColor('bg-blue-500')
    },
    {
      name: 'Olive',
      color: 'text-white',
      bgColor: 'bg-olive-500',
      onClick: () => setBgColor('bg-olive-500')
    },
    {
      name: 'White',
      color: 'text-black',
      bgColor: 'bg-white-100',
      onClick: () => setBgColor('bg-white-100')
    },
    {
      name: 'black',
      color: 'text-white',
      bgColor: 'bg-black',
      onClick: () => setBgColor('bg-black')
    }
  ]

  return (
    <>
      <div className={`w-full h-screen duration-700 ${bgColor}`}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0" >
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg rounded-3xl bg-white">
            {
              buttons.map((button, index) => (
                <Button
                  key={index}
                  button={button}
                  action={button.onClick}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
