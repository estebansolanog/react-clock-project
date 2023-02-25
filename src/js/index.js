//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application
let tiempoSegundos = 0
let decenaSeconds = 0
let firstMinuteSeconds = 0
let secondMinuteSeconds = 0
let firstHourSeconds = 0
let secondHourSeconds = 0

setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1

    switch (true) {
        case tiempoSegundos > 9:
            tiempoSegundos = 0
            decenaSeconds++
            break;
        case decenaSeconds > 5:
            decenaSeconds = 0
            firstMinuteSeconds++
            break;
        case firstMinuteSeconds > 9:
            firstMinuteSeconds = 0
            secondMinuteSeconds++
            break;
        case secondMinuteSeconds > 5:
            secondMinuteSeconds = 0
            firstHourSeconds++
            break;
        case firstHourSeconds > 9:
            firstHourSeconds = 0
            secondHourSeconds++
            break;
        case firstHourSeconds > 3 && secondHourSeconds > 1:
            tiempoSegundos = 0
            decenaSeconds = 0
            firstMinuteSeconds = 0
            secondMinuteSeconds = 0
            firstHourSeconds = 0
            secondHourSeconds = 0
            break;
        default:
            break
    }
    ReactDOM.render(<SecondsCounter secondHourSeconds={secondHourSeconds} firstHourSeconds={firstHourSeconds} secondMinuteSeconds={secondMinuteSeconds} firstMinuteSeconds={firstMinuteSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />, document.querySelector("#app"));
}, 500)
