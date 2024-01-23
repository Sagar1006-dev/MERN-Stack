import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    const history = useNavigate()
    e.preventDefault();
    try {
      await axios.post("http://localhost:5173/", {
        email,
        password,
      })
      .then(res =>{
        if (res.data="exist") {
          history("/home",{state:{id:email}})
        }
        else if (res.data="notexist") {
          alert("User has not signup")
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e);
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login">
      <h1>Logi</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
};

export default Login;
