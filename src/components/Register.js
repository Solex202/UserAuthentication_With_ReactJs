import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = ({setAlert}) => {
    let navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const headers={
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : 'https://user-registration-app-frontend.herokuapp.com/'
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const userDetails = { firstName, lastName, email, password, confirmPassword }
        if(email === "" || password === "" || firstName=== "" || lastName=== "" || confirmPassword=== ""){
            setAlert({ishow:true, status:"error", message:"invalid details"})
        } 
        console.log(userDetails);
        axios.post("https://user-registration-application1.herokuapp.com/api/v1/user/createUser", userDetails, {headers:headers})
            .then(data => {
                console.log(data);
                setAlert({ishow:true, status:"success", message:"Registration successful"})
                setTimeout(() => setAlert({ishow:false, status:"", message:""}), 5000)
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")

            }).catch(
                data => {
                    console.log(data)
                    setAlert({ishow:true, status:"error", message:data.response.data.message})
                }
            ).finally(
                setTimeout(()=> setAlert({ishow:false, status:"", message: ""}), 3000)
        )
}

    const getList = () => { 
            navigate("/listOfUsers")
    }
    return (
        <div className='parent bg-primary w-100' style={{minHeight:'80vh', minWidth:'50vw', borderRadius:'18px'}}>
            <button type='summit' class='btn bg-danger float-right' style={{marginTop:'14px', marginRight:'8px', color:'white'}}  onClick={getList}>view all users</button>

            <div className='container div-center mt-5' >
                <h1>REGISTER</h1>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="enter first name"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            placeholder="enter last name"
                            type='text'
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="form-group">Email</label>
                        <input
                            className="form-control"
                            placeholder="Enter Email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="form-group">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Password"
                            minLength={8}
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <h6>Password must be at least 8 characters or more</h6>
                    </div>
                    <div>
                        <label className="form-group">ConfirmPassword</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Password"
                            minLength={8}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            
                        />
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                            <button className="btn btn-default bg-secondary mt-5 mb-5 w-50" style={{color:'white'}} onClick={(e) => handleRegister(e)}>Register</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
    )
}

export default Register