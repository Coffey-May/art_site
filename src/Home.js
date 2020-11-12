import React from "react";
import { Parallax } from "react-parallax";
import { Spring } from "react-spring/renderprops";


const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"


const inline = {
    color: '#fff',
    left: '59%',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: `13%`,



}


function Home() {
    return (
        <div className="Home">

            <Parallax id="bg1 " bgImage={image1} strength={300}>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 1300, duration: 1300 }}
                >
                    {props => (
                        <div style={props}>
                            <div className="text-container" style={{ height: 900, backgroundColor: 'black', opacity: '0.7' }}>
                                <h2 className="text" style={inline}>COFFEY MAY<br /> <p>FINE ART </p></h2>
                            </div>
                        </div>
                    )}
                </Spring>


            </Parallax>

            <h1>|||</h1>
            <Parallax id="bg2" bgImage={image2} strength={500}>
                <div style={{ height: 500, backgroundColor: 'black', opacity: '0.5' }}>
                    <div >jndskjfn</div>
                </div>
            </Parallax>
            <div style={{ height: '100vh' }}></div>
        </div >
    );
}

export default Home;
