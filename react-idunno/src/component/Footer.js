import React  from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='https://www.facebook.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='facebook-f' />
        </a>
        <a href='https://twitter.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='twitter' />
        </a>
        <a href='https://www.google.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='google' />
        </a>
        <a href='https://www.instagram.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='instagram' />
        </a>
        <a href='https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F%3Ftrk%3D404_page&trk=login_reg_redirect' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='linkedin' />
        </a>
        <a href='https://github.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='github' />
        </a>
      </div>
    </section>

    <section className='footer-center'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
             IdunnoApp
            </h6>
            <p>
              #1 Planning App in the Nation. Created in Miami!
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Plans</h6>
            <p>
              <a href='#!' className='text-reset'>
                Restaurants
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Activites
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Events
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Add your venue or event.
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Reservations
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
               Event Calender
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Newletters
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                FAQs
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              Miami, FL, 33133, US
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@idunnoapp.co
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> Call Us
            </p>
            <p>
              <MDBIcon color='secondary' icon='print' className='me-3' /> Inquiries
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright: IdunnoApp
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        IdunnoApp.co
      </a>
    </div>
  </MDBFooter>
  );
}
export default Footer;