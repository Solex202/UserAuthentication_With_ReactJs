import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const EthData = () => {

    let navigate = useNavigate()
    const[values, setValues] = useState([])

    useEffect(() => {
        
        axios.get("https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/range/1/day/2022-05-28/2022-06-12?adjusted=true&sort=asc&limit=120&apiKey=YhMqnfTBAh2F4bg0ZB6qZ0JqzvSMVEeB")
        .then(data=>{
            console.log(data.data);
            setValues(data.data.results);
            console.log(values);
        });
    }, [])

   

    function sumClosedValuesForEth (values) {
        let sum = 0
        values.forEach(value => sum = sum + value.c)
        return sum/15
    }

    const navigateBack =() =>{
        navigate('/welcomePage')
    }
return (
    <div className='container'>
        <div>
            <h2 className='text-center'></h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Volume Traded</th>
                    <th>Volume weighed</th>
                    <th>Timestamp</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Low</th>
                    <th>High</th>
                    <th>Number of Transactions</th>

                </thead>

                <tbody>
                    {
                        values.map(value=>
                        <tr>
                            <td>{value.v}</td>
                            <td>{value.vw}</td>
                            <td>{value.t}</td>
                            <td>{value.o}</td>
                            <td>{value.c}</td>
                            <td>{value.l}</td>
                            <td>{value.h}</td>
                            <td>{value.n}</td>

                        </tr>
                        )
                    }
                </tbody>
                
            </table>
            <div>
                <p>Moving average:</p>
                <h2>{sumClosedValuesForEth(values)}</h2>
            </div>
        </div>

        <button type='summit' class='btn bg-secondary' onClick={navigateBack}>Go back</button>
</div>
)
}

export default EthData