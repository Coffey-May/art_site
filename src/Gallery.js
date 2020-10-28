import React from "react";
import Painting from "./components/Painting";





const paintings = [
    { title: `Brooklyn Diner`, medium: `Oil on canvas`, image: `/images/PBrooklyndiner.jpeg` },
    { title: `Fruits`, medium: `Oil on canvas`, image: `/images/PApple.jpeg` },
    { title: `The Pheasant`, medium: `Oil on canvas`, image: `/images/PAccelerator.jpeg` }
]

function Gallery() {
    return (
        <div className="Gallery">

            {
                paintings.map((painting) => <Painting title={painting.title} medium={painting.medium} image={painting.image} />)
            }

        </div>

    );
}

export default Gallery;
