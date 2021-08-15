import React, { useState } from "react";
import PaintingModal from "./PaintingModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 2,
    padding: '10px'
}

function Painting({ title, medium, image }) {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <>



            <div className="painting">
                <div className="thumbnail">
                    <LazyLoadImage alt="oil painting" src={image} />
                </div>
                <h3>
                    {title}
                </h3>
                <h5>
                    {medium}

                </h5>
                <div style={BUTTON_WRAPPER_STYLES} className="nav-link">
                    <button className="nav-link" onClick={() => setIsOpen(true)}>
                        Detail
                    </button>
                </div>
                <PaintingModal image={image} open={isOpen} onClose={() => setIsOpen(false)}>


                    <hr></hr>
                    <h1 style={{ margin: '0 auto' }}>
                        {title}
                    </h1>
                    <h3 style={{ margin: 0 }}>
                        {medium}

                    </h3>
                    <br />
                    <button onClick={() => setIsOpen(false)} >Close</button>


                </PaintingModal>


            </div>

        </>
    );


}

export default Painting;
