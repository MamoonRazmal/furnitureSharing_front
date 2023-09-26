import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [furniture, SetFurniture] = useState([])
  const api="https://furniture-sharing.onrender.com/"
const getdata=async()=>{
  const res=await fetch(api)
  const data=await res.json()
  SetFurniture(data);
}
useEffect(()=>{
  getdata();
},[])
console.log(furniture);
  return (
    <>
    {furniture.map((x)=>(
      <>
      <div key={x.id}>
        <h1>{x.name}</h1>
        <h1>{x.type}</h1>
       

      </div> </>
    ))}
    </>
  )
}

export default App
