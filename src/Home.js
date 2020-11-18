

import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';
import { NavLink } from "react-router-dom";




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
                <div id="page2" style={{ height: 800, backgroundColor: 'black', opacity: '0.7', color: '#fff' }}>
                    <div style={{ padding: '3rem', height: '60vh', }}>
                        <h1 style={{}}>About me</h1>
                        <p style={{ fontWeight: 'light', margin: '0 auto', fontSize: '1.25rem' }}>Hello, my name is Coffey May. I am a realist oil painter and software developer.
                        I built this website with ReactJS to showcase my paintings and artwork. I like to paint in the tradition of photo-realism;
                        Although, sometimes I like to incorporate other, more traditional methodologies as well.
                     <br />
                        I home you enjoy my work, and for questions or comments regarding purchasing, or commissions, or software development needs,
                        you can reach me via the
                        <NavLink to="/contact" style={{ textDecoration: 'none', color: '#FFF' }} >
                                <em className="nav-link"> Contact </em>
                            </NavLink>
                         page of this website.
                         {/* <br />
                            <NavLink className="text" to="/gallery" style={{ color: '#fff', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} className="nav-link">
                                Enter Gallery
                    </NavLink> */}
                        </p>

                    </div>


                    <AnchorLink className="text" style={{ color: '#fff', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} href='#Nav'>Back to top</AnchorLink>
                    <p style={{ marginTop: '5rem' }}><FaCopyright /> COPYRIGHT2020</p>
                </div>

            </Parallax>
        </div >
    );
}

export default Home;
