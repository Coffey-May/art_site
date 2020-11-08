import React from "react";


function PaintingDetail({ show, closeModalHandler, title, image, medium }) {
    return (
        <div className="modal-wrapper"
            style={{
                opacity: show ? "1" : "0",

            }}>
            <div className="modal-header">
                <p>{title}</p>
                <span onClick={closeModalHandler} className="close-modal-btn">x</span>

            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <img alt="oil painting" src={image} />
                    <p>{medium}</p>
                </div>
                <div className="modal-footer"></div>
                <button onClick={closeModalHandler} className="btn-cancel">Close</button>
            </div>

        </div>
    );
}

export default PaintingDetail;
