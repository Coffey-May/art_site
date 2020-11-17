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

    { id: 1, title: `Bird`, medium: `Oil on canvas`, image: `/images/PBird.jpeg` },
    { id: 12, title: `Cow`, medium: `Oil on canvas`, image: `/images/PCow.jpeg` },
    { id: 13, title: `The Dream`, medium: `Oil on canvas`, image: `/images/PDream.jpeg` },
    { id: 14, title: `Cheesburger`, medium: `Oil on canvas`, image: `/images/PFly.jpeg` },
    { id: 15, title: `Froggy`, medium: `Oil on canvas`, image: `/images/PFroggy.jpeg` },
    { id: 16, title: `Harem of Saturn`, medium: `Oil on canvas`, image: `/images/PHos.jpeg` },
    { id: 17, title: `Gummy Worms`, medium: `Oil on canvas`, image: `/images/PGummyworms.jpeg` },
    { id: 18, title: `Homeless`, medium: `Oil on canvas`, image: `/images/PHomeless.jpeg` },
    { id: 19, title: `Lady Bug`, medium: `Oil on canvas`, image: `/images/PLadybug.jpeg` },
    { id: 20, title: `Liberty`, medium: `Oil on canvas`, image: `/images/PLiberty.jpeg` }

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
