import React from 'react'
import { useState } from 'react'

export default function Upcomingevents() {
    const [name, setname] = useState("")
    const [url, seturl] = useState("")
    const [register, setregister] = useState("")
    const [starting, setstarting] = useState("")
    const [ending, setending] = useState("")

    function eventfun() {
        var obj = {
            name,
            url,
            register,
            starting,
            ending
        }
        // console.log(obj)
        fetch(`http://localhost:8001/upcomingevent`, {
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
            <h1>Upcoming Event</h1>
            <input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} />
            <input type="text" placeholder='Details Url' value={url} onChange={e => seturl(e.target.value)} />
            <input type="text" placeholder='Registeration url' value={register} onChange={e => setregister(e.target.value)} />
            <input type="date" placeholder='starting' value={starting} onChange={e => setstarting(e.target.value)} />
            <input type="date" placeholder='ending' value={ending} onChange={e => setending(e.target.value)} />
            <button onClick={() => eventfun()}>Add Event</button>
        </div>
    )
}
