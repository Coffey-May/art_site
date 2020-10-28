import React from "react";
import Logo from "../"


function Painting({ title, medium, image }) {
    return (
        <div className="painting">



            <div class="thumbnail">
                <img src={image} />
            </div>
            <h3>
                {title}
            </h3>
            <footer>
                <h5>
                    {medium}
                </h5>
                <button>
                    View Detail
                </button>
            </footer>
        </div>
    );
}

export default Painting;
