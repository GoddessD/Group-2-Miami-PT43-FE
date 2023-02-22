import React from 'react';
import "../contact.css"



const ContactUs = () => {
  return (

    <><div class="container">
    <div class="row">
      <div class="col-sm">
        <h1> Contact Us</h1>
        <h4>Get in touch</h4>
<br />
<br/>
        <p><i class="fa-solid fa-envelope"></i> admin@idunno.com</p>
        
        <p><i class="fa-solid fa-phone-volume"></i> 1-888-843-2378 (THE BEST)</p>

        <p><i class="fa-solid fa-location-dot"> 111 NE 1st Street,Miami, FL 33132</i></p>
      </div>
           <div class="col-sm">
           <form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text"  class="form-control" id="staticEmail2" placeholder="email@example.com" />
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
  </div>
  </form>
<div class="mb-3">
    <textarea rows="5" style={{height:"20%",width:"70%",marginTop:"5%", marginRight:"23%"}}></textarea>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3" style={{marginLeft:"-18%"}}>Send</button>
  </div>
      </div>
    </div>
  </div>

    
    </>
  );
  };

export default ContactUs;