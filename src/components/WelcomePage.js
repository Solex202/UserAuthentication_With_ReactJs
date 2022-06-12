import React from 'react'
import CyrptoData from './CyrptoData'
import {useNavigate} from "react-router-dom"
const WelcomePage = () => {

  let navigate = useNavigate();

  const logOut = ()=>{
    navigate("/")
  }
  return (

    <>
    <h1>Welcome to my crypto data page</h1>
    <div><CyrptoData/></div>

    <button onClick={logOut}>Logout</button>
    </>
  )
}

export default WelcomePage