import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = ({setIsSubmited}) => {

    const [auth, setAuth] = useState("register")
    const [alert, setAlert] = useState({ishow: false, status:"", message:""})

    const switchHandler = ()=>{
        if(auth === "login"){
            setAuth("register")
        }else{
            setAuth("login")
        }
    }
return (
    <div className='auth-container'>
        <div className="auth-body">
            <div style={{display: "flex", justifyContent:"space-between"}}>
                
                {alert.ishow && 
                <div className='alert' style={
                    alert.status ==="error"? 
                    {backgroundColor: "red"} : 
                    {backgroundColor: "teal"}}> 
                        {alert.message}
                </div>}
                
                <button class="btn bg-secondary" onClick = {switchHandler} >{auth === "login"? "Register" : "Login"}</button>
            </div>
            {auth === "login" ? <Login setIsSubmited = {setIsSubmited} setAlert = {setAlert} /> : <Register setAlert = {setAlert} />}
            
        </div>
    </div>
)
}

export default Authentication