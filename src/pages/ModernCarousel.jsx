import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModernCarousel = () => {
    return (
        <Carousel>
            {/* Slide 1 */}
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
                        src="src/images/1.png"  // Assuming the images are in the public/images folder
                        alt="Slide 1"
                        style={{
                            objectFit: 'cover',  // Ensures the image fills the container without distortion
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </Carousel.Item>

            {/* Slide 2 */}
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
                        src="src/images/2.png"  // Corrected image path
                        alt="Slide 2"
                        style={{
                            objectFit: 'cover',  // Ensures the image fills the container without distortion
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </Carousel.Item>

            {/* Add more slides as needed */}
        </Carousel>
    );
};

export default ModernCarousel;
