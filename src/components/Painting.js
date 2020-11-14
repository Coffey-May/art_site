import React, { useState } from "react";
import PaintingModal from "./PaintingModal";


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
                    <img alt="oil painting" src={image} />
                </div>
                <h3>
                    {title}
                </h3>
                <h5>
                    {medium}

                </h5>
                <div style={BUTTON_WRAPPER_STYLES}>
                    <button onClick={() => setIsOpen(true)}>
                        Open
                </button>
                </div>
                <PaintingModal image={image} open={isOpen} onClose={() => setIsOpen(false)}>

                    <h1 style={{ margin: '0 auto' }}>
                        {title}
                    </h1>
                    <h3 style={{ margin: 0 }}>
                        {medium}

                    </h3>

                    <button onClick={() => setIsOpen(false)} >Close</button>
                    <hr></hr>


                </PaintingModal>


            </div>

        </>
    );


}

export default Painting;
