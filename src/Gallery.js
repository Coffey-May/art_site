import React from "react";
import Painting from "./components/Painting";
import { FaCopyright } from 'react-icons/fa';





const paintings = [
    { id: 1, title: `Brooklyn Diner`, medium: `Oil on board`, image: `/images/PBrooklyndiner.jpeg` },
    { id: 2, title: `Fruits`, medium: `Oil on paper`, image: `/images/PApple.jpeg` },
    { id: 3, title: `The Pheasant`, medium: `Oil on canvas`, image: `/images/PAccelerator.jpeg` },
    { id: 4, title: `Cheesburger`, medium: `Oil on paper`, image: `/images/PBurger.jpeg` },
    { id: 5, title: `Butterfly`, medium: `Oil on canvas`, image: `/images/PButterfly.jpeg` },
    { id: 6, title: `Cherries`, medium: `Oil on board`, image: `/images/PCherries.jpeg` },
    { id: 7, title: `Chinatown`, medium: `Acrylic on canvas`, image: `/images/PChinatownbangkok.jpeg` },
    { id: 8, title: `Consume`, medium: `Oil on canvas`, image: `/images/PProducts.jpeg` },
    { id: 9, title: `Dandelion`, medium: `Oil on paper`, image: `/images/PDandelion.jpeg` },
    { id: 10, title: `Frog`, medium: `Oil on board`, image: `/images/PFrog.jpeg` },

    { id: 11, title: `Bird`, medium: `Oil on canvas`, image: `/images/PBird.jpeg` },
    { id: 12, title: `Cow`, medium: `Oil on canvas`, image: `/images/PCow.jpeg` },
    { id: 13, title: `The Dream`, medium: `Colored pencils on matboard`, image: `/images/PDream.jpeg` },
    { id: 14, title: `Cheesburger`, medium: `Oil on paper`, image: `/images/PFly.jpeg` },
    { id: 15, title: `Froggy`, medium: `Oil on paper`, image: `/images/PFroggy.jpeg` },
    { id: 16, title: `Harem of Saturn`, medium: `Oil on canvas`, image: `/images/PHos.jpeg` },
    { id: 17, title: `Gummy Worms`, medium: `Oil on board`, image: `/images/PGummyworms.jpeg` },
    { id: 18, title: `Homeless`, medium: `Oil on canvas`, image: `/images/PHomeless.jpeg` },
    { id: 19, title: `Lady Bug`, medium: `Oil on paper`, image: `/images/PLadybug.jpeg` },
    { id: 20, title: `Liberty`, medium: `Oil on canvas`, image: `/images/PLiberty.jpeg` },

    { id: 21, title: `The Loop`, medium: `Oil on door`, image: `/images/PLoopgirl.jpeg` },
    { id: 22, title: `Photo-Negative House`, medium: `Oil on canvas`, image: `/images/PNegativeHouse.jpeg` },
    { id: 23, title: `Hall of Neptune`, medium: `Oil on canvas`, image: `/images/PNeptune.jpeg` },
    { id: 24, title: `Night Ride`, medium: `Oil on canvas`, image: `/images/PNightride.jpeg` },
    { id: 25, title: `Orange`, medium: `Oil on paper`, image: `/images/POrange.jpeg` },
    { id: 26, title: `Peppermint Mustard`, medium: `Oil on canvas`, image: `/images/PPeppermintmustard.jpeg` },
    { id: 27, title: `Science`, medium: `Oil on canvas`, image: `/images/PPills.jpeg` },
    { id: 28, title: `River`, medium: `Oil on paper`, image: `/images/PLandscape.jpeg` },
    { id: 29, title: `Girl in tree`, medium: `Oil on canvas`, image: `/images/PRedhair.jpeg` },
    { id: 30, title: `Spider`, medium: `Oil on canvas`, image: `/images/PSpider.jpeg` },

    { id: 31, title: `The Peacock`, medium: `Oil on canvas`, image: `/images/PPeacock.jpeg` },
    { id: 32, title: `Teeth`, medium: `Oil on board`, image: `/images/PTeeth.jpeg` },
    { id: 33, title: `Tokyo Night Ride`, medium: `Oil on canvas`, image: `/images/PTokyo.jpeg` },
    { id: 34, title: `Girl and Tree`, medium: `Oil on paper`, image: `/images/PTreegirl.jpeg` },
    { id: 35, title: `Vaporwave`, medium: `Oil on paper`, image: `/images/PVapor.jpeg` },
    { id: 36, title: `Sister`, medium: `Oil on canvas`, image: `/images/PSister.jpeg` },
    { id: 37, title: `Trinkets`, medium: `Acrylic on canvas`, image: `/images/PTrinkets.jpeg` },
    { id: 38, title: `Party Night`, medium: `Oil on paper`, image: `/images/PTrashley.jpeg` }
    // { id: 39, title: `Girl in tree`, medium: `Oil on canvas`, image: `/images/PRedhair.jpeg` },
    // { id: 40, title: `Spider`, medium: `Oil on canvas`, image: `/images/PSpider.jpeg` },

]

function Gallery() {
    return (
        <div className="Gallery">

            {
                paintings.map((painting) => <Painting key={painting.id} title={painting.title} medium={painting.medium} image={painting.image} />)
            }
            <p style={{ marginTop: '5rem' }}><FaCopyright /> COPYRIGHT2020</p>
        </div>

    );
}

export default Gallery;
