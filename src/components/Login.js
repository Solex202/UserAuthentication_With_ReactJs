import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = ({setAlert}) => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const handleLogin = (e)=>{

        const userDetails = {email, password}
        axios.post("https://user-registration-application1.herokuapp.com/api/v1/user/login", userDetails)
            .then(data =>{
            navigate("/welcomePage")
            setAlert({ishow:true, status:"success", message:"Registration successful"})
            if(email === "" || password ===""){
            setTimeout(() => setAlert({ishow:true, status:"success", message:"invalid details"}), 5000)
    }       
        setEmail("")
        setPassword("")
        }).catch(
            data => {
                console.log(data)
                setAlert({ishow:true, status:"error", message:data.response.data.message})
            }
        ).finally(
            setTimeout(()=> setAlert({ishow:false, status:"", message: ""}), 3000)
        )
    }
return (
    <div className='bg-primary w-100 h-100' >
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
            <button className="btn bg-secondary" onClick={handleLogin}>Login</button>
        </div>
    </div>
)
}

export default Login