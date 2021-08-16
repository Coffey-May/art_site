import React from 'react';
import ReactDom from 'react-dom';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapInteractionCSS } from 'react-map-interaction';


const MODAL_STYLES = {

    position: 'fixed',
    top: '50%',
    left: '50%',
    height: '90vh',
    // overflow: 'hidden',
    width: '60vw',
    transform: 'translate(-50%,-50%)',
    // padding: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    zIndex: 1000,
    overflow: 'auto'

}

const OVERLAY_STYLE = {

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
    overflow: 'auto'

}


const PaintingModal = ({ open, children, onClose, image }) => {
    if (!open) return null
    return ReactDom.createPortal(

        <div>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                {children}
                <MapInteractionCSS>
                    <img style={{ backgroundSize: 'contain', width: '100%' }} alt="oil painting" src={image} /><br />
                </MapInteractionCSS>
            </div>
        </div>
        ,
        document.getElementById('portal')
    )
}
export default PaintingModal
