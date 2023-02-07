import React from 'react';
import "../App.css"



const ContactUs = () => {
  return (

    <><div className='container-left'>
      <div classname='contact-container'>
        <div className='Title'><h1>Contact Us</h1></div>


        <div className='Address'><h8><i class="fa-solid fa-location-dot"> 111 NE 1st Street,Ste 808,Miami, FL 33132</i></h8></div>

        <div className='OfficeNumber'><h5><i class="fa-solid fa-phone-volume"></i> 1-888-843-2378 (THE BEST)</h5></div>

        <div className='workemail'><h5><i class="fa-solid fa-envelope"></i> admin@idunno.com</h5></div>

        <div className='Website'><h5><i class="fa-sharp fa-solid fa-globe"></i> https://www.idunno.com/</h5></div>
      </div></div>

      <div classname="contact-form">
        <form>
          <div class="name">
            <label for="InputName">Full Name*</label>
            <input type="name" class="form-control" id="InputName" placeholder="Name" />
          </div>
          <div class="email">
            <label for="exampleInputEmail1">Email Address*</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="phone-number">
            <label for="exampleInputPassword1">Phone Number</label>
            <input type="phonenumber" class="form-control" id="InputPhoneNumber" placeholder="Phone Number" />
          </div>
          <div class="message">
            <label for="exampleInputPassword1 form-control">Message*</label>
            <input type="message" class="form-control" id="InputMessage" placeholder="Message" />
          </div>
          <div>
            <button type="button">Click Me</button>
          </div>
        </form>
        </div>

    </>
  );
  };

export default ContactUs;