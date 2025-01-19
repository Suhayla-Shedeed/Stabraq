import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModernCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '656px',
                        backgroundColor: '#f8f8f8',
                    }}
                >
                    <img
                        src="src/images/1.png"  
                        alt="Slide 1"
                        style={{
                            objectFit: 'cover',  
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '656px',
                        backgroundColor: '#f8f8f8',
                    }}
                >
                    <img
                        src="src/images/2.png"  
                        alt="Slide 2"
                        style={{
                            objectFit: 'cover', 
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </Carousel.Item>

        </Carousel>
    );
};

export default ModernCarousel;
