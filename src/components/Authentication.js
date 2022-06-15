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
    <div className='auth-container '>
           <div style={{display: "flex", justifyContent:"space-between"}}>
                
                {alert.ishow && 
                <div className='alert' style={
                    alert.status ==="error"? 
                    {backgroundColor: "red"} : 
                    {backgroundColor: "teal"}}> 
                        {alert.message}
                </div>}
                
                <button className="btn bg-secondary ml-5 pl-4 pr-4 pt-3 pb-3 mt-5" style={{color:'white'}} onClick = {switchHandler} >{auth === "login"? "Register" : "Login"}</button>
            </div>
        <div className="auth-body w-100 p-5 d-flex justify-content-center align-items-center">
         
            {auth === "login" ? <Login setIsSubmited = {setIsSubmited} setAlert = {setAlert} /> : <Register setAlert = {setAlert} />}
            
        </div>
    </div>
)
}

export default Authentication