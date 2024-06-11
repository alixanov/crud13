import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../Reading/reading.css"

const Reading = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    


      useEffect(() => {
        axios
          .get(`https://6666c378a2f8516ff7a4cbcb.mockapi.io/users/${id}`)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, [id]);
    
  return (
    <div className="reading__container">
      <p>{data.name}</p>
      <p>{data.lastname}</p>
      <p>{data.email}</p>
      <Link to={"/"}> ←bosh sahifaga </Link>
    </div>
  );
}

export default Reading