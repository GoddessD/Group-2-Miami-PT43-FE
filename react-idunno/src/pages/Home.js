import "../App.css";
import { Link } from 'react-router-dom'





const Home = () => {
  return (
    <div className="image-container">
      <div className='header-container'>
        <h1 className='header'>The Day Is<br /> Yours... Let<br />Us Plan It!
          <h5>Don't Know what to do ?...Don't know where yo eat or have fun? ? Plan your day with ease!<br />
            Our website offers the ability to generate your daily plans with friends, family, or by yourself.<br />
            From planning an outdoor activity to
            a day of self care generated for you, our website offers <br />detailed daily plans selections tailored
            to your location. Get ready! idunno makes sure your day is <br />enjoyable.Start planning now on our website!!!</h5>
          <Link to="/generator">
            <button type="button" class="btn btn-danger">MAKE MY PLANS</button>
          </Link>
        </h1>

      </div>
      <div className='image-wrapper'>
        <img src='/idkicon.png' alt='robot' />
      </div>
      <div class='main-content'>
      </div>

<div class="row">
  <div class="card mb-3" style={{ maxWidth: "540px" }}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src='/spoon and fork.png' class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">HUNGRY???</h5>
      <p class="card-text">idunno generates restaurants in your area for you to enjoy dinner weather its with your friends , solo, or </p>
    </div>
  </div>
</div>
</div>


          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src='/family icon.webp' class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"> FAMILY OUTING </h5>
                  <p class="card-text">We know family is everything , allowing us to <br />plan your outing gives you more time to enjoy them. </p>

                </div>
              </div>
            </div>
          </div>


  <div class="card mb-3" style={{ maxWidth: "540px" }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src='/idunno man.png' class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">SOLO PLANS</h5>
        <p class="card-text">Introvert, selfcare, or maybe just a "YOU" day, Lonely with No Plans ?<br /> We got YOU. </p>

      </div>
    </div>
  </div>
</div>
</div>
        
<img src='/Robothelp.png' alt='robot' />
</div>
  
);
}
      
      
export default Home;