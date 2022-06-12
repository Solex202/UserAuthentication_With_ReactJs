import React from 'react'
import {useNavigate} from "react-router-dom"
import bg from "../assests/pics.jpg"


const WelcomePage = () => {

  let navigate = useNavigate();

  const logOut = ()=>{
    navigate("/")
  }

  const navigateEth = ()=>{
    navigate('/ethData')
  }

  const navigateSpy = ()=>{
    navigate('/spyData')
  }

  const navigateFutureData = ()=>{
    navigate('/futureData')
  }

  return (

    <div className='text-center' style={{backgroundImage: `url(${bg})`, minHeight:'100vh'}}>
      <h1 className='mb-5 mt-5 bg-danger'>Welcome to Crypto Data page</h1> 
      <div className='d-flex flex-row justify-content-around'>
        <div className=''>
          <h3>For Eth data:</h3>
          <buttton type='summit' class='btn bg-primary'  onClick = {navigateEth}>click here</buttton>
        </div>
        <div className=''>
          <h3>For Spy data:</h3>
          <button type='summit' class='btn bg-primary' onClick={navigateSpy}>click here</button>
        </div>
        <div>
          <h3>For Future data:</h3>
          <button type='summit' class='btn bg-primary' onClick={navigateFutureData}>click here</button>
        </div>

      </div>

      <div className="container">
          <div className="row">
              <div className="col text-center">
              <button className="btn btn-default bg-danger mt-5 mb-5 w-25" onClick={logOut}>Logout</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default WelcomePage