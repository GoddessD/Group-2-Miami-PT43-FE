import React from 'react';



const AboutUs = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">1</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active p-5">
          <h2> IDUNNO is a revolutionary app that helps you get the most out of your day. My simply selecting the type of activites you want to do and the amount of
            time you have available. IDUNNO generates a perfectly balanced day plan customised to your individual needs. Whether you need to make the most of a short
            afternoon or plan a whole day of activities, IDUNNO has covered. With IDUNNO, you can clear your mind, stay focused on your to-dos, and enjoy
            your day with every minute accounted for. Try IDUNNO today and take control of your day!

          </h2>

          <div>
            Follow us & download our app at: @Idunno
          </div>
          <div className="carousel-img d-flex justify-content-center">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png" className="d-block img-carousel m-3" alt="..." />
            <img src="https://i.ibb.co/pZmmbjJ/6ff53bc5d797e9efc2ac7b2b602c267a-8295237617862628623.png" className="d-block img-carousel m-3" alt="..." />
            <img src="https://i.ibb.co/0sZqWrP/396b8eb0d0d2f27aadb476e0b62d0926-8878641138830187947.png" className="d-block img-carousel m-3" alt="..." />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-6 m-auto">
            <div className="mx-5 ">
              <h3 className=""> The Best restaurant options in your areas at your finger tips! </h3>
            </div>

          </div>
          <div className="col-6">
            <div className="thubmnail-img m-5">
              <img src="https://th-thumbnailer.cdn-si-edu.com/7A7ltVhTSNs_YZlVzyZdzlj077Y=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/dc/e6/dce60b13-8a23-4004-9541-de05d0d600e9/dishes_made_by_michelin_star_restaurants.jpg" className="d-block w-100 h-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://stg-images.radio.com/aiu-media/EventsEventful1920x1080-776f3eb9-24a7-4cf3-9dd2-c5685c91864b.jpg?width=780&crop=8:5.1,offset-y0" className="d-block w-100 h-75" alt="..." />
        <h3> The Top events in your desired area for every occassion!</h3>
      </div>
    </div><button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button><button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
       
    );
    };

export default AboutUs;