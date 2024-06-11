import React, { useState } from "react";
import "./create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    lastname: "",
    number:"",
    email: "",

  });



  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://6666c378a2f8516ff7a4cbcb.mockapi.io/users",inputData)
      .then((res) => {
        alert("Data post succesfuly")
        
         navigate("/");
      });
   
  };

  return (
    <div className="create__container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ism:</label>
        <input
          type="text"
          name="name"
          id=""
          className="form-control"
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
        />
        <label htmlFor="name">Familya:</label>
        <input
          type="text"
          name="lastname"
          id=""
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, lastname: e.target.value })
          }
        />

        <label htmlFor="email">Telefon raqam:</label>
        <input
          type="number"
          name="number"
          id=""
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, number: e.target.value })
          }
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id=""
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
