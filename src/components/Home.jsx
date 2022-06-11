import React from 'react'
import "./Table.css"

export default function Home({ login, student, upcomingevent, liveevent }) {
  return (
    <>
      {
        login.length === 0 ?
          <h1>Login First to see data</h1>
          :
          login[0].admin ?
            <>
              <h2>Admin Details</h2>
              <div>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Admin</th>
                  </tr>
                  {
                    login.map((ele) => {
                      return (
                        <tr key={ele._id}>
                          <td>{ele.name}</td>
                          <td>{ele.email}</td>
                          <td>{ele.contact}</td>
                          <td>{ele.admin ? "Admin" : "Student"}</td>
                        </tr>
                      )
                    })
                  }
                </table>
              </div>
              <h2>Student Data</h2>
              <div>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Roll No.</th>
                    <th>Term</th>
                    <th>Current Year</th>
                    <th>Admin</th>
                  </tr>
                  {
                    student.map((ele) => {
                      return (
                        <tr key={ele._id}>
                          <td>{ele.name}</td>
                          <td>{ele.email}</td>
                          <td>{ele.contact}</td>
                          <td>{ele.rollno}</td>
                          <td>{ele.term}</td>
                          <td>{ele.currentyear}</td>
                          <td>{ele.admin ? "Admin" : "Student"}</td>
                        </tr>
                      )
                    })
                  }
                </table>
              </div>
            </>
            :
            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Roll No.</th>
                  <th>Term</th>
                  <th>Current Year</th>
                  <th>Admin</th>
                </tr>
                {
                  login.map((ele) => {
                    return (
                      <tr key={ele._id}>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.contact}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.term}</td>
                        <td>{ele.currentyear}</td>
                        <td>{ele.admin ? "Admin" : "Student"}</td>
                      </tr>
                    )
                  })
                }
              </table>
            </div>
      }
      <h2>Live Events</h2>
      {login.length > 0 &&
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Starting</th>
                <th>Ending</th>
                <th>URL</th>
                <th>Register URL</th>
              </tr>
            </thead>
            <tbody>
              {
                liveevent.map((ele) => {
                  return (
                    <tr key={ele._id}>
                      <td>{ele.name}</td>
                      <td>{ele.starting}</td>
                      <td>{ele.ending}</td>
                      <td>{ele.url}</td>
                      <td>{ele.register}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
      <h2>Upcoming Events</h2>
      {login.length > 0 &&
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Starting</th>
                <th>Ending</th>
                <th>URL</th>
                <th>Register URL</th>
              </tr>
            </thead>
            <tbody>
              {
                upcomingevent.map((ele) => {
                  return (
                    <tr key={ele._id}>
                      <td>{ele.name}</td>
                      <td>{ele.starting}</td>
                      <td>{ele.ending}</td>
                      <td>{ele.url}</td>
                      <td>{ele.register}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
    </>
  )
}
