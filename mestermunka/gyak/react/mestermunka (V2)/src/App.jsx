import './App.css'
import React, {useEffect,useState,Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/egy')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
        
    }, [])  
  return (
    <>
      <div>
        {data.map((d, i) => (
            <div key={i}>
                <img src={d.kep}/>
            </div>
        ))} 
        {data.map((d, i) => (
                <div key={i}>
                <h1>{d.Receptek_neve}</h1>
                </div>
          ))} 
        {data.map((d, i) => (
                <div key={i}>
                <p>{d.Keszites}</p>
                </div>
        ))}
      </div>
    </>
  )
}

export default App
