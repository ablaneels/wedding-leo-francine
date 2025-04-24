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
        return ["/pictures/Domaine de Millon/319707155_225718826470843_5517565324097533581_n.jpg", "/pictures/Domaine de Millon/Domaine_de_Millon_71.jpg", "/pictures/Domaine de Millon/Domaine_de_Millon_77-scaled (1).jpg", "/pictures/Domaine de Millon/ShootingMillon-0043-scaled (1).jpg"];
    case "/dresscode":
        return ["/pictures/Dress Code Page/beautiful-wedding-dress-with-plume-is-dressed-mannequin.jpg"];
    default:
        return ["/pictures/Francine and Leo/IMG_0378.jpeg", "/pictures/Francine and Leo/IMG_4108.jpeg", "/pictures/Francine and Leo/IMG_4337.jpeg", "/pictures/Francine and Leo/IMG_5759.jpeg", "/pictures/Francine and Leo/IMG_6040.jpeg"];
    }
};

const images = getImagesForRoute(location.pathname);

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