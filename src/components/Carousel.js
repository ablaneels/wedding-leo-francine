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
        return ["/pictures/image_venue.png", "/pictures/image_venue.png", "/pictures/image_venue.png"];
    case "/dresscode":
        return ["/pictures/image_dresscode.png", "/pictures/image_dresscode.png", "/pictures/image_dresscode.png"];
    default:
        return ["/pictures/IMG_4108 1.png", "/pictures/IMG_4108 1.png", "/pictures/IMG_4108 1.png"];
    }
};

const images = getImagesForRoute(location.pathname);

    return (
        <BootstrapCarousel data-bs-theme="light" className='carrousel'>
        {images.map((src, index) => (
            <BootstrapCarousel.Item>
                <img
                key={index}
                className="d-block w-100"
                src={src}
                alt={`slide-${index}`}
                />
            </BootstrapCarousel.Item>
        ))}
        </BootstrapCarousel>
    );  
}

export default Carousel