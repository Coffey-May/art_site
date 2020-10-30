import React from "react";
import { Parallax } from "react-parallax"

const image1 = "/images/PChinatownbangkok.jpeg"
const image2 = "/images/PStrawberry.jpeg"


const inline = {
    color: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',

}

function Home() {
    return (
        <div className="Home">

            <Parallax id="bg1" bgImage={image1} strength={500}>
                <div class="text-container" style={{ height: 900, backgroundColor: 'black', opacity: '0.5' }}>

                    <h1 class="#" style={inline}>COFFEY MAY</h1>


                </div>
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
