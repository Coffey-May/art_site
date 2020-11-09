import React, { useState } from "react";
import PaintingModal from "./PaintingModal";
// import PaintingDetail from "./PaintingDetail"

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 2,
    padding: '10px'
}

const OTHER_CONTENT_STYLES = {
    positiion: 'relative',
    zIndex: 1
}

function Painting({ title, medium, image }) {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <>


            {/* {show ? <PaintingDetail medium={medium} image={image} title={title} show={show} closeModalHandler={closeModalHandler} /> : null
            } */}
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
                <PaintingModal open={isOpen} onClose={() => setIsOpen(false)}>

                    <h3>
                        {title}
                    </h3>
                    <h5>
                        {medium}

                    </h5>
                    <div className="thumbnail">
                        <img alt="oil painting" src={image} />
                    </div>
                </PaintingModal>


            </div>

        </>
    );


}

export default Painting;
