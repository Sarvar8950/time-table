import React from 'react'
import { useState } from 'react'

export default function Admin() {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState(0)
    function addadmin() {
        var obj = {
            name,
            password,
            email
        }
        // console.log(obj)
        // console.log(obj)
        fetch(`https://timetableapp333.herokuapp.com/admin`, {
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
      <h1>Register Admin</h1>
      <input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)}/>
      <input type="number" placeholder='contact' value={contact} onChange={e => setcontact(e.target.value)}/>
      <button onClick={() => addadmin()}>Submit</button>
    </div>
  )
}
