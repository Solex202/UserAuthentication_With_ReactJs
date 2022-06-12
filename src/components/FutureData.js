import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const FutureData = () => {

    const[newValues, setNewValues] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        
        axios.get(" https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1d&startTime=1653692400000&endTime=1654988400000")
        .then(data=>{
            console.log(data);
            setNewValues(data.data);
            console.log(newValues);
        });
    }, [])

    function sumClosedValuesForFutureData (newValues) {
        let sum = 0
        newValues.forEach(value => {
            // console.log(value[4]);
            sum = sum + Number(value[4])
            console.log(sum);
        })
        return sum/newValues.length
    }

    const navigateBack = () =>{
        navigate('/welcomePage')
    }
  return (
    <div className='mt-5'>
    <h1 className='text-center'>COMODITY FUTURE DATA</h1>
    <table className='table table-bordered table-striped'>
        <thead>
            <th>Open time</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Close time</th>
            <th>Base Asset volume</th>
            <th>Number of trades</th>
            <th>Taker buy volume</th>
            <th>Taker buy base asset</th>
            <th>Ignore</th>

        </thead>

        <tbody>
            {
                newValues.map(value=>
                <tr>
                    <td>{value[0]}</td>
                    <td>{value[1]}</td>
                    <td>{value[2]}</td>
                    <td>{value[3]}</td>
                    <td>{value[4]}</td>
                    <td>{value[5]}</td>
                    <td>{value[6]}</td>
                    <td>{value[7]}</td>
                    <td>{value[8]}</td>
                    <td>{value[9]}</td>
                    <td>{value[10]}</td>
                    <td>{value[11]}</td>
                    
                </tr>
                )
            }
        </tbody>
        
    </table>
    <div>
        <p>Moving average:</p>
        <h2>{sumClosedValuesForFutureData(newValues)}</h2>
    </div>

    <button type='summit' class='btn bg-secondary' onClick={navigateBack}>Go back</button>
</div> 
  )
}

export default FutureData