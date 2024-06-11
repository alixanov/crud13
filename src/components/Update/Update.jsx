import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://6666c378a2f8516ff7a4cbcb.mockapi.io/users/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://6666c378a2f8516ff7a4cbcb.mockapi.io/users/${id}`, inputData)
      .then((res) => {
        alert("Data updated successfully");
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
          value={inputData.name}
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
        />
        <label htmlFor="lastname">Familya:</label>
        <input
          type="text"
          name="lastname"
          id=""
          className="form-control"
          value={inputData.lastname}
          onChange={(e) =>
            setInputData({ ...inputData, lastname: e.target.value })
          }
        />
        <label htmlFor="number">Telefon raqam:</label>
        <input
          type="number"
          name="number"
          id=""
          className="form-control"
          value={inputData.number}
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
          value={inputData.email}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
