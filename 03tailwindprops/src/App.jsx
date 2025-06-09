import { useState } from 'react';
import './App.css'
import DetailCard from './components/cards/DetailCard'

function App() {

  const [port, setPort] = useState(0);

  const [userDetail, setUserDetail] = useState({
    name: 'John Doe',
    age: 30,
    location: 'New York'
  });

  return (
    <>
      <h1 className='bg-green-400 text-red-400 p-4 rounded-xl mb-4' >Tailwind test</h1>
      <DetailCard port={port} userDetail={userDetail} />
    </>
  )
}

export default App
