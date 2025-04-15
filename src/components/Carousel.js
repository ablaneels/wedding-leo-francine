import React from 'react'
import './Carousel.css'
import BootstrapCarousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
    return (
        <BootstrapCarousel data-bs-theme="light" className='carrousel'>
        <BootstrapCarousel.Item>
            <img
            className="d-block w-100"
            src="/pictures/IMG_4108 1.png"
            alt="First slide"
            />
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
            <img
            className="d-block w-100"
            src="/pictures/IMG_4108 1.png"
            alt="Second slide"
            />
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
            <img
            className="d-block w-100"
            src="/pictures/IMG_4108 1.png"
            alt="Third slide"
            />
        </BootstrapCarousel.Item>
        </BootstrapCarousel>
      );  
}

export default Carousel