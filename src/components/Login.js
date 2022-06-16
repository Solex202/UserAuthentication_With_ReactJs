import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = ({setAlert}) => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const handleLogin = (e)=>{

        const userDetails = {email, password}
        if(email === "" || password === ""){
        setAlert({ishow: true, status:"error", message:"email or password incorrect"})
        }
        axios.post("https://user-registration-application1.herokuapp.com/api/v1/user/login", userDetails)
            .then(response =>{
                console.log(response);
                navigate("/welcomePage")
            setAlert({ishow:true, status:"success", message:"Login successful"})
            setTimeout(() => setAlert({ishow:false, status:"", message:""}), 5000)
           
            console.log("Response -> ", response)
        setEmail("")
        setPassword("")
        }).catch(
            err => {
                console.log(err)
                setAlert({ishow:true, status:"error", message:err.response.data.message })
            }
        ).finally(
            setTimeout(()=> setAlert({ishow:false, status:"", message: ""}), 3000)
        )
    }
return (
    <div className='bg-primary ' style={{minHeight:'30vh', minWidth:'80vw', borderRadius:'18px'}}>
        <div className='container div-center '>
            <h1 className='text-center'>LOGIN</h1>
            <div>
                <label className="form-group">Email</label>
                <input
                    className="form-control"
                    placeholder="enter email"
                    type="email"
                    required
                    value={email}
                    autoFocus=""
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className="form-group">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    autoFocus=""
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn bg-secondary" style={{color:'white', marginTop:'11px'}} onClick={handleLogin}>Login</button>
        </div>
    </div>
)
}

export default Login