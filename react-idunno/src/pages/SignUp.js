import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"


const SignUp = ()=> {
  const [values, setValues] = useState({
    email: "",
    password:"",
    name: ""
  });
  
   const handleSubmit = async (event) => {
    event.preventDefault();
   
    const {email,password,name} =values

    const userData = {
      email,
      password,
      name
    };
    
    const options = { 
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*"
      }
    }
    
      await axios.post(`https://3001-goddessd-group2miamipt4-pc4ka7rljyq.ws-us85.gitpod.io/api/signup`, userData,options)
      .then(res => {
        console.log(res.data);
      })
  
      .catch(err => {
        console.error(err);
      });

      
    }

    



   const handleChange=name => event => {
    setValues({...values, [name]:event.target.value})
   }
  
 console.log("values",values)

return (
    <div class="form-backgroundsu">
    <form className='form-container' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="signUpEmail">Email </label>
        <input 
          type="email" 
          className="form-control" 
          id="signUpEmail" 
          value={values.email}
          onChange={handleChange("email")} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="signUpName">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="signUpName" 
          value={values.name}
          onChange={handleChange("name")} 
        />
      </div>
     <div className="form-group">
        <label htmlFor="signUpPassword">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="signUpPassword" 
          value={values.password}
          onChange={handleChange("password")} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      <img src='/laptopro.png' alt='robot' />
    </form>
    </div>
  )
}

export default SignUp;
