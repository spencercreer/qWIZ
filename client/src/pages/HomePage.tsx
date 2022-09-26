import React from "react";

function HomePage() {
    return (
        <div className="">
            <h1 className="">Math Quiz</h1>
            <p className="">Answer as many math questions as you can within the time limit. </p>
            <p>Your timer will begin with seventy-five seconds. Incorrect answers will reduce your time by ten seconds!</p>
            <button type="button" className="btn" id="multiply-btn" value="Multiplication">
                Multiplication
            </button>
            <button type="button" className="btn" id="division-btn" value="Division">Division</button>
            <button type="button" className="btn" id="binary-btn" value="Binary">Binary</button>
        </div>
    );
}

export default HomePage;
