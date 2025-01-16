import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModernCarousel = () => {
    return (
        <Carousel style={{width:"101.5%"}}>
            {/* Slide 1 */}
            <Carousel.Item style={{width:"100%"}}>
                <div style={{ alignItems: 'center', justifyContent: 'center', height: '656px', backgroundColor: '#f8f8f8' }}>
                    <img
                        src="src/images/1.png"
                        alt="Slide 1"
                        style={{ objectFit: 'fill', width: '100%', height: '100%' }}
                        />
                </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <div style={{  alignItems: 'center', justifyContent: 'center', height: '656px', backgroundColor: '#f8f8f8' }}>
                    <img
                        src="src/images/2.png"
                        alt="Slide 2"
                        style={{ objectFit: 'fill', width: '100%', height: '100%' }}
                        />
                   
                </div>
            </Carousel.Item>

            {/* Add more slides as needed */}
        </Carousel>
    );
};

export default ModernCarousel;
