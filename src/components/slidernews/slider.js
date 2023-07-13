import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css';
import bg1big from '../../assets/nadiabg.jpg'

const Slider = () => {
    const images = [
        
        bg1big,
        "https://the.ismaili/sites/default/files/styles/carousel_banner/public/img_003_2.jpg?itok=bcm5Ab8x",
        "https://pbs.twimg.com/media/FMJdlRqXsAcPN1v?format=jpg&name=large",
    ];

    return (
        <Zoom scale={1.4} >
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%", position: "relative" }}>
                    {/* <div>
                        <h2 style={{position: "absolute" }}>hello</h2>
                    </div> */}
                    <img style={{ objectFit: "cover", width: "100%", height: "95vh" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export default Slider;