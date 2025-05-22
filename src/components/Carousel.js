import React from 'react'
import { useLocation } from "react-router-dom";
import './Carousel.css'
import BootstrapCarousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
const location = useLocation();

const getImagesForRoute = (pathname) => {
    switch (pathname) {
    case "/venue":
        return ["/pictures/Domaine de Millon/Rectangle 31.jpeg", "/pictures/Domaine de Millon/Rectangle 33.jpeg", "/pictures/Domaine de Millon/Rectangle 35.jpeg", "/pictures/Domaine de Millon/Rectangle 37.jpeg"];
    case "/dresscode":
        return ["/pictures/Dress Code Page/Rectangle 29.jpeg"];
    default:
        return ["/pictures/Francine and Leo/Rectangle 19.jpeg", "/pictures/Francine and Leo/Rectangle 21.jpeg", "/pictures/Francine and Leo/Rectangle 23.jpeg", "/pictures/Francine and Leo/Rectangle 25.jpeg", "/pictures/Francine and Leo/Rectangle 27.jpeg"];
    }
};

const getImagesForRouteMobile = (pathname) => {
    switch (pathname) {
    case "/venue":
        return ["/pictures/Domaine de Millon/Rectangle 32.jpeg", "/pictures/Domaine de Millon/Rectangle 34.jpeg", "/pictures/Domaine de Millon/Rectangle 36.jpeg", "/pictures/Domaine de Millon/Rectangle 38.jpeg"];
    case "/dresscode":
        return ["/pictures/Dress Code Page/Rectangle 30.jpeg"];
    default:
        return ["/pictures/Francine and Leo/Rectangle 20.jpeg", "/pictures/Francine and Leo/Rectangle 22.jpeg", "/pictures/Francine and Leo/Rectangle 24.jpeg", "/pictures/Francine and Leo/Rectangle 26.jpeg", "/pictures/Francine and Leo/Rectangle 28.jpeg"];
    }
};
var images = getImagesForRoute(location.pathname);
if (window.innerWidth <= 960)
    images = getImagesForRouteMobile(location.pathname);

    return (
        <BootstrapCarousel data-bs-theme="light" className='carrousel'>
        {images.map((src, index) => (
            <BootstrapCarousel.Item>
                <img
                key={index}
                className="carousel-image"
                src={src}
                alt={`slide-${index}`}
                />
            </BootstrapCarousel.Item>
        ))}
        </BootstrapCarousel>
    );  
}

export default Carousel