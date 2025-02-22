import React, {useEffect,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axois from "axios"
import "./App.css";

function App() {

  const [data,setData] = useState([])

    useEffect(() => {
        axois.get('http://localhost:3000/osszes')
        .then(data => setData(data.data))
        .catch(err => console.log(err));
        
    }, [])  
  return (
    <>
      <table>
        <tbody className='box'>
          {data.map((d) =>
              <tr key={data.Receptek_id} >
                <td><img src={d.kep} className='img'/></td>
                <th className='name'>{d.Receptek_neve}</th>
                <td className='text'>{d.Keszites}</td>
            </tr>
          )}
        </tbody>
      </table>
      

    </>
  )
}

export default App
