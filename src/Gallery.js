import React from "react";
import Painting from "./components/Painting";





const paintings = [
    { id: 1, title: `Brooklyn Diner`, medium: `Oil on canvas`, image: `/images/PBrooklyndiner.jpeg` },
    { id: 2, title: `Fruits`, medium: `Oil on canvas`, image: `/images/PApple.jpeg` },
    { id: 3, title: `The Pheasant`, medium: `Oil on canvas`, image: `/images/PAccelerator.jpeg` },
    { id: 4, title: `Cheesburger`, medium: `Oil on canvas`, image: `/images/PBurger.jpeg` },
    { id: 5, title: `Butterfly`, medium: `Oil on canvas`, image: `/images/PButterfly.jpeg` },
    { id: 6, title: `Cherries`, medium: `Oil on canvas`, image: `/images/PCherries.jpeg` },
    { id: 7, title: `Chinatown`, medium: `Oil on canvas`, image: `/images/PChinatownbangkok.jpeg` },
    { id: 8, title: `Consume`, medium: `Oil on canvas`, image: `/images/PConsumerDetail.jpeg` },
    { id: 9, title: `Dandelion`, medium: `Oil on canvas`, image: `/images/PDandelion.jpeg` },
    { id: 10, title: `Frog`, medium: `Oil on canvas`, image: `/images/PFrog.jpeg` },
]

function Gallery() {
    return (
        <div className="Gallery">

            {
                paintings.map((painting) => <Painting key={painting.id} title={painting.title} medium={painting.medium} image={painting.image} />)
            }

        </div>

    );
}

export default Gallery;
