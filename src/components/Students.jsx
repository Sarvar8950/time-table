import React from 'react'
import { useState } from 'react'
import "./Input.css"

export default function Students() {
    const [name, setname] = useState("")
    const [rollno, setrollno] = useState(0)
    const [currentyear, setcurrentyear] = useState(0)
    const [contact, setcontact] = useState(0)
    const [term, setterm] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function studentfun() {
        var obj = {
            name,
            rollno,
            currentyear,
            contact,
            term,
            email,
            password
        }
        // console.log(obj)
        fetch(`http://localhost:8001/student`, {
            method : "POST",
            body : JSON.stringify(obj),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} />
      <input type="number" placeholder='rollno' value={rollno} onChange={e => setrollno(e.target.value)} />
      <input type="number" placeholder='currentyear' value={currentyear} onChange={e => setcurrentyear(e.target.value)} />
      <input type="number" placeholder='contact' value={contact} onChange={e => setcontact(e.target.value)} />
      <input type="text" placeholder='term' value={term} onChange={e => setterm(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} />
      <button onClick={() => studentfun()}>Register Student</button>
    </div>
  )
}
