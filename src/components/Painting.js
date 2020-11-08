import React, { useState } from "react";
import PaintingDetail from "./PaintingDetail"



function Painting({ title, medium, image }) {
    const [show, setShow] = useState(false)

    const closeModalHandler = () => setShow(false)

    return (
        <>
            {show ? <PaintingDetail medium={medium} image={image} title={title} show={show} closeModalHandler={closeModalHandler} /> : null
            }
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

                <button
                    onClick={() => setShow(true)}
                    id="detail-btn">
                    View Detail
                </button>
                {/* <PaintingDetail title={title} show={show} closeModalHandler={closeModalHandler} /> */}
            </div>

        </>
    );


}

export default Painting;
