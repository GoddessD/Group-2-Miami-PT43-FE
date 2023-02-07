import React from 'react';



const AboutUs = () => {
    return (

            
         
        <div classname="MyCarousel">
            <div classname='Carousel-wrapper'>
                '<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                    '  <div class="carousel-indicators">'
                        '    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
                        '    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1" class="active" aria-label="Slide 2"></button>
                        '    <button type="button" data-mdb-target="#carouselBasicExample" data-mdbslide-to="2" class="active" aria-label="Slide 3"></button>
                        ' </div>
                </div>
                
                {/* Slide 1  */}
                '  <div class="carousel-inner">
                    '        <div class="carousel-item active">'
                        '      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Sunset Over the City" />'
                        '      <div class="carousel-caption d-none d-md-block">'
                            '        <h5>First slide label</h5>'
                            '        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>'
                            '      </div>'
                        '    </div>'
                    ''
                    {/* Slide 2*/}
                    '     <div class="carousel-item active">'
                        '      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh" />'
                        '      <div class="carousel-caption d-none d-md-block">'
                            '        <h5>Second slide label</h5>'
                            '        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
                            '      </div>'
                        '    </div>'
                    ''
                    {/* Slide 3  */}
                    '    <div class="carousel-item active">'
                        '      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Cliff Above a Stormy Sea" />'
                        '      <div class="carousel-caption d-none d-md-block">'
                            '        <h5>Third slide label</h5>'
                            '        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>'
                            '      </div>'
                        '    </div>'
                    '  </div>'
                {/* Inner */}
                ''
                {/* ' Controls   */}
                '  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">'
                    '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>'
                    '    <span class="visually-hidden">Previous</span>'
                    '  </button>'
                '  <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">'
                    '    <span class="carousel-control-next-icon" aria-hidden="true"></span>'
                    '    <span class="visually-hidden">Next</span>'
                    '  </button>'
                '</div> 
        </div>
    );
    };

export default AboutUs;