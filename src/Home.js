import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const CurrentYear = new Date().getFullYear()
const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"
const inline = {
    color: '#fff',
    left: '58%',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: `7%`,
    margin: '0 auto',
    // fontSize: '2em'
}

function Home() {
    return (
        <div className="Home">
            <Parallax id="bg1 " bgImage={image1} style={{ width: '100%' }} strength={50}>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 700, duration: 1000 }}
                >
                    {props => (
                        <div style={props}>
                            <div className="text-container" style={{ height: 900, backgroundColor: 'black', opacity: '0.75' }}>
                                <p id="nameTitle" className="text" style={inline}>COFFEY MAY<br />
                                    {/* <hr style={{ width: '30vw' }} /> */}
                                    FINE ART
                                    <br />
                                    {/* <hr style={{ width: '20vw' }} /> */}

                                </p>
                                <div>
                                    <AnchorLink className="text" style={{ marginLeft: '-9rem', marginTop: '15rem', position: 'fixed', color: 'white', textDecoration: 'none', border: '1px solid white', padding: '.5rem', borderRadius: '99rem' }} href='#page2'>LEARN MORE</AnchorLink>
                                    <br />   <br />   <br />
                                    <NavLink to="/gallery" className="text" style={{ marginLeft: '-6.75rem', marginTop: '20rem', position: 'fixed', color: 'white', textDecoration: 'none', border: '1px solid white', padding: '.5rem', borderRadius: '99rem' }} >GALLERY</NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </Spring>
            </Parallax>
            <h6>|||</h6>

            <Parallax id="bg2" bgImage={image2} strength={200} speed={300}>
                <div id="page2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100vh', backgroundColor: 'black', opacity: '0.7', color: '#fff' }}>
                    <div style={{ height: '60vh', width: '90%', maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className="#" style={{ margin: '0 auto', fontSize: '2.5rem' }}>About me</h1> <hr />
                        <p id="quote" style={{ maxWidth: '800px', textAlign: 'left', fontWeight: 'light', margin: '0 auto' }}> <FaQuoteLeft size={15} />  {' '}Hello, my name is Coffey May. I am a realist oil painter and software developer.
                            I built this website with ReactJS to showcase my paintings and artwork. I like to paint in the tradition of photo-realism;
                            although sometimes I like to incorporate other, more traditional methodologies as well.
                            <br />
                            I hope you enjoy my work, and for questions or comments regarding purchasing, or commissions, or software development needs,
                            you can reach me via the

                            page of this website. {' '}
                            <FaQuoteRight size={15} />
                        </p>

                    </div>
                    <br />
                    <div>
                        <AnchorLink className="text" style={{ position: "relative", color: '#fff', textDecoration: 'none', border: '1px solid white', padding: '1rem', borderRadius: '99rem' }} href='#Nav'>Back to top</AnchorLink>
                    </div>
                    <div>
                        <p style={{ marginTop: '3rem' }}><FaCopyright /> COPYRIGHT{CurrentYear}</p>
                    </div>
                </div>

            </Parallax>
        </div >
    );
}

export default Home;
