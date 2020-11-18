

import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from 'react-router-dom';



const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"


const inline = {
    color: '#fff',
    left: '52%',

    // position: 'absolute',
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
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <AnchorLink style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} href='#page2'>LEARN MORE</AnchorLink>



                                </h2>

                            </div>

                        </div>

                    )}
                </Spring>

            </Parallax>
            <h6>|||</h6>
            <Parallax id="bg2" bgImage={image2} strength={200}>
                <div id="page2" style={{ height: 900, backgroundColor: 'black', opacity: '0.5' }}>
                    <h2 className="text" style={inline}>Realist painting roles, since the advent of the camera, have been filled by a new class of painter, unbound by tradition.
                    Contemporary realist oil painters deal with an ever-increasing encroachment of technology. I am not only an oiil painter, but a software developer.  <br /><hr />
                                    FINE ART<br /><hr />
                        {/* <a>LEARN MORE</a> */}
                        <NavLink to="/gallery" className="nav-link">
                            <p style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }}> View Gallery</p>
                        </NavLink>
                        <br />
                    </h2>
                </div>
            </Parallax>
        </div >
    );
}

export default Home;
