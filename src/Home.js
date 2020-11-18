

import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";
import AnchorLink from 'react-anchor-link-smooth-scroll';




const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"


const inline = {
    color: '#fff',
    left: '52%',

    position: 'absolute',
    backgroundColor: 'transparent',
    top: `7%`,
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

                                <h2 className="text" style={inline}>COFFEY MAY<br />
                                    <hr style={{ width: '30vw' }} />
                                    FINE ART
                                    <br />
                                    <hr style={{ width: '20vw' }} />
                                </h2>
                                <AnchorLink className="text" style={{ marginLeft: '-9rem', marginTop: '30rem', position: 'fixed', color: 'white', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} href='#page2'>LEARN MORE</AnchorLink>
                            </div>
                        </div>
                    )}
                </Spring>

            </Parallax>
            <h6>|||</h6>

            <Parallax id="bg2" bgImage={image2} strength={200}>
                <div id="page2" style={{ height: 900, backgroundColor: 'black', opacity: '0.7' }}>

                    <p className="text" style={{ padding: '3rem', margin: '0 auto', color: '#fff', }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus, facilis ut omnis quo ipsam, nihil pariatur repudiandae ducimus accusantium praesentium reiciendis maiores?</p>

                    <AnchorLink className="text" style={{ color: '#fff', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} href='#Nav'>Back to top</AnchorLink>

                </div>

            </Parallax>
        </div >
    );
}

export default Home;
