import React from "react";

const SecondsCounter = (props) => {

    return (
        <>
            <div className="container-fluid d-flex m-0 p-3 justify-content-center" id="backGround">
                <div className="row row-cols-auto text-white display-1 fw-semibold">
                    <div className="col m-2 py-3 px-3" id="number"><i class="fa-regular fa-clock"></i></div>
                    <div className="col m-2 py-3 px-3" id="number">{props.secondHourSeconds}</div>
                    <div className="col m-2 py-3 px-3" id="number">{props.firstHourSeconds}</div>
                    <span className="py-3">:</span>
                    <div className="col m-2 py-3 px-3" id="number">{props.secondMinuteSeconds}</div>
                    <div className="col m-2 py-3 px-3" id="number">{props.firstMinuteSeconds}</div>
                    <span className="py-3">:</span>
                    <div className="col m-2 py-3 px-3" id="number">{props.decenaSeconds}</div>
                    <div className="col m-2 py-3 px-3" id="number">{props.seconds}</div>
                </div>
            </div>
        </>

    );
};

export default SecondsCounter;