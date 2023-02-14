import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"

function Login() {
  const [values, setValues] = useState({
    email: "",
    password:""
   
  });
  
   const handleSubmit = async (event) => {
    event.preventDefault();
   
    const {email,password} =values

    const userData = {
      email,
      password
      
    };
    
    const options = { 
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*"
      }
    }
    
      await axios.post(`https://3001-goddessd-group2miamipt4-pc4ka7rljyq.ws-us85.gitpod.io/api/login`, userData,options)
      .then(res => {
        console.log(res.data);
      })

      .then(data => {
        localStorage.setItem("token", data.token)
      })
  
      .catch(err => {
        console.error(err);
      });


      function getToken(){

        const token = localStorage.getItem("token");
        console.log("token",token)
        if (token=== null ){
          return undefined
        }
        return token



      }

      getToken()

      
    }

    
    
    const handleChange=name => event => {
      setValues({...values, [name]:event.target.value})
     }
    
   console.log("values",values)




  return (
    <div class="form-background">
      <form className='form-box' onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="email">Email </label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={values.email} onChange={handleChange("email")} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group  ">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={values.password}onChange={handleChange("password")} />
        </div>
       
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login;
