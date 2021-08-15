import React from 'react';
import ReactDom from 'react-dom';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapInteractionCSS } from 'react-map-interaction';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    // height: '90vh',
    width: '90vw',
    transform: 'translate(-50%,-50%)',
    padding: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    zIndex: 1000,
    textAlign: 'center'
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}


const PaintingModal = ({ open, children, onClose, image }) => {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>

                <MapInteractionCSS>

                    <img style={{ width: '90%', height: '70vh' }} alt="oil painting" src={image} /><br />

                </MapInteractionCSS>

                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
export default PaintingModal
