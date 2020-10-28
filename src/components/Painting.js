import React from "react";
import Logo from "../"


function Painting({ title, medium, image }) {
    return (
        <div className="painting">
            <h3>
                {title}
            </h3>
            <img src={image} />


            <h5>
                {medium}
            </h5>
        </div>
    );
}

export default Painting;
