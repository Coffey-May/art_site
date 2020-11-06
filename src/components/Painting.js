import React from "react";



function Painting({ title, medium, image }) {
    function detail() {

        console.log(title, medium)

    }

    return (
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

            <button onClick={detail} id="detail-btn">
                View Detail
                </button>
        </div>
    );
}

export default Painting;
