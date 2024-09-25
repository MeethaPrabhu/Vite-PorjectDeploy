import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let num=10;
    let str="Meetha";
    let bool=true;
    let arr=[1,2,3,4,5]
    let obj={
        "id":1,
        "name":"Sam",
    }
    let menus=['Home','About','Contact'];
    let output=[];
  // const [count, setCount] = useState(0)
 
  return (
    <>

        <p>Number:{num}</p>
        <p>String:{str}</p>
        <p>Boolean:{bool.toString()}</p>
        <p>Array:{arr}</p>
        <p>Object:{obj.id},{obj.name}</p>


        <ul>
        {
            menus.map((v,i)=>{
                return(
                    <li key={i}>{v}</li>
                )
            })
        }
        </ul>
      
    </>
  )
}

export default App
