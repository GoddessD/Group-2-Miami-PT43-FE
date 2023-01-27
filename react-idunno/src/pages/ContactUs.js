



import React from 'react';
import "../App.css"
<script src="https://kit.fontawesome.com/b27ffd9eb3.js" crossorigin="anonymous"></script>

const ContactUs = () => {
  return (
    <><div className='container-left'>
      <div className='Title'><h1>Contact Us</h1></div>

      <div className='Address'><h4><i class="fas-duotone fa-map-location">111 NE 1st Street, Suite 808,Miami, FL 33132</i></h4></div>

      <div className='OfficeNumber'><h4><i class="fas-duotone fa-phone-office"></i>1-888-843-2378 (THE BEST)</h4></div>

      <div className='workemail'><h4><i class="fas-solid fa-envelope"></i>admin@idunno.com</h4></div>

      <div className='Website'><h4><i class="fas-regular fa-globe"></i>https://www.idunno.com/</h4></div>
    </div>

      <div className="appcover">
        <img src='https://files.slack.com/files-pri/T0BFXMWMV-F04JGTD7CUX/183bf777-c663-4be3-80bf-d4135583fd0b.png' className='img-fluid rounded' alt='' />
      </div>
    </>
        );
                       };

        export default ContactUs;