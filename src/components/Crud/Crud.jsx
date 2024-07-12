
import React, { useEffect, useState } from 'react'
import "./crud.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./crud.css"

const Crud = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://668f62c780b313ba0917e986.mockapi.io/register")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  },[])
  return (
    <div className="table__container">
      <h2>Crud App with JSON Server</h2>
      <Link to={"/create"}>Create</Link>
      <table>
        <thead>
          <tr>
            <th>Ism</th>
            <th>Familya</th>
            <th>Telefon raqami</th>
            <th>Email</th>
            <th>ACtion</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`update/${item.id}`}>Update</Link>
                  <button onClick={(e) => handleDelete(item.id)}>Delete</button>
                  <Link to={`reading/${item.id}`}>Reading</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Malumot yuklanmadi</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );


  function handleDelete(id) {
const confirm = window.confirm("Malumotni uchirishni istaysizmi ?")

    if(confirm){
       axios
         .delete(`https://668f62c780b313ba0917e986.mockapi.io/register/${id}`  )
         .then((res) => {
           alert("Muvofiqiyatli uchirildi");
           navigate("/");
         });
   }
  }
}

export default Crud