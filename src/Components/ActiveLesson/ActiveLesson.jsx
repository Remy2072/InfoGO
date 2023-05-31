import React from "react";
import "./ActiveLesson.scss";

function ActiveLesson() {
    return (
        <section className="activeLesson">
            <div className="activeLesson__wrapper">
                <h4 className="activeLesson__wrapper-title">Geen actieve les.</h4>
                <button className="activeLesson__wrapper-button">Les Activeren</button>
            </div>
        </section>
    );
}

export default ActiveLesson;
