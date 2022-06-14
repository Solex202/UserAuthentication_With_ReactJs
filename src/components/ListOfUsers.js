import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ListOfUsers = () => {

  let navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({firstName:"", lastName:"", email:""})
    
  useEffect(()=>{
    
    users.length === 0 && axios.get("https://user-registration-application1.herokuapp.com/api/v1/user/getAllUsers")
      .then(data=>{
          console.log(data.data);
          setUsers(data.data)
      })
  },[])

  const updateUser = (firstName, lastName, email) => {
    setUser({firstName, lastName, email})
  }

  const handleChange = (e) => {
      setUser({...user, [e.target.name] : e.target.value})
  }

  const handleEdit = () => {
    axios.patch(`https://user-registration-application1.herokuapp.com/api/v1/user/updateUser/${user.email}`, user).then(
      data => {
        console.log(data)
        let newusers = users.map(data => data.email === user.email ? {firstName : user.firstName, lastName: user.lastName, email : user.email} : data)
        setUsers(newusers)
      } 
    )
  }

  const handleDelete = (email) => {
      axios.delete(`https://user-registration-application1.herokuapp.com/api/v1/user/deleteUser/${email}`).then(
        data => {
          console.log(data)
          let newusers = users.filter(data => data.email !== email )
          setUsers(newusers)
        } 
      )
  }

  const navigateBack =() =>{
    navigate('/')
  }
return (
    <>
      <table class="table">
        <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {users.length > 0 && users.map(
      ( user, index) => {
          return  <tr key={index}>
          <th scope="row">{user.firstName}</th>
          <td>{user.lastName}</td>
          <td >{user.email}</td>
          <td>
          
            <button type="button" class="btn btn-primary mr-4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>updateUser(user.firstName, user.lastName, user.email)}>
              Edit
            </button>
            <button type="button" class="btn btn-danger " onClick={()=>handleDelete(user.email)}>Delete</button>
          </td>
        </tr>
      }
      )}
  </tbody>
  <button type='button' class='btn btn-primary' onClick={navigateBack}>Go back</button>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <label>First Name</label>
          <input value={user.firstName} name='firstName' onChange={handleChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input value={user.lastName}  name='lastName' onChange={handleChange}/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleEdit}>Save Edit</button>
      </div>
    </div>
  </div>
  
</div>
</>
    
  )
}

export default ListOfUsers