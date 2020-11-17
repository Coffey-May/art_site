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
                                <h2 className="text" style={inline}>COFFEY MAY<br />
                                    <p>FINE ART </p>


                                </h2>
                            </div>

                        </div>

                    )}

                </Spring>

            </Parallax>

            <h6>|||</h6>
            <Parallax id="bg2" bgImage={image2} strength={200}>
                <div style={{ height: 900, backgroundColor: 'black', opacity: '0.5' }}>

                </div>

            </Parallax>


            {/* <div style={{ height: '100vh' }}></div> */}
        </div >
    );
}

export default Home;
