import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setlogin , setstudent, setliveevent, setupcomingevent}) {
  const [user, setuser] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  function loginfun() {
    var obj = {
      email,
      password,
      user
    }
    fetch(`http://localhost:8001/liveevent`)
      .then(res => res.json())
      .then(res => setliveevent(res))
    fetch(`http://localhost:8001/showupcomingevent`)
      .then(res => res.json())
      .then(res => setupcomingevent(res))
    fetch(`http://localhost:8001/allstudent`)
      .then(res => res.json())
      .then(res => setstudent(res))
    if (user === "student") {
      fetch(`http://localhost:8001/studentinfo`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.error === undefined) {
            setlogin(res)
            navigate("/")
          } else {
            alert("invalid data")
          }
        })
    } else {
      fetch(`http://localhost:8001/admininfo`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.error === undefined) {
            setlogin(res)
            navigate("/")
          } else {
            alert("invalid data")
          }
        })
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <label>
        <input type="radio" name="usertype" onClick={() => setuser('admin')} /> Admin
      </label>
      <label>
        <input type="radio" name="usertype" onClick={() => setuser('student')} /> Student
      </label>
      <input type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} />
      <button onClick={() => loginfun()}>Login</button>
    </div>
  )
}
