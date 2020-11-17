

import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";



const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"


const inline = {
    color: '#fff',
    left: '58%',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: `13%`,
    margin: '0 auto'


}


function Home() {
    return (
        <div className="Home">

            <Parallax id="bg1 " bgImage={image1} strength={50}>

                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 700, duration: 1000 }}
                >
                    {props => (
                        <div style={props}>
                            <div className="text-container" style={{ height: 900, backgroundColor: 'black', opacity: '0.7' }}>

                                <h2 className="text" style={inline}>COFFEY MAY<br /><hr />
                                    FINE ART<br /><hr />
                                    <a>LEARN MORE</a>
                                    <br />
                                </h2>
                            </div>
                        </div>
                    )}
                </Spring>
            </Parallax>
            <h6>|||</h6>
            <Parallax id="bg2" bgImage={image2} strength={200}>
                <div style={{ height: 900, backgroundColor: 'black', opacity: '0.5' }}>
                    <h2 className="text" style={inline}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, voluptas quam itaque atque doloribus molestiae cupiditate beatae, dolorum sit ab dolore ipsum,
                      dolores dolor. Quod dignissimos porro repellat totam impedit!<br /><hr />
                                    FINE ART<br /><hr />
                        <a>LEARN MORE</a>
                        <br />
                    </h2>
                </div>
            </Parallax>
        </div >
    );
}

export default Home;
