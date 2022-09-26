import React, { useState, useEffect } from "react";

function QuizPage() {
    const [time, setTime] = useState(75)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime -= 1)
        }, 1000);
    
        return () => clearInterval(timer);
    }, [])
    return (
        <div className="">
            <h1 className="">Math Quiz</h1>
            <div className="">
                <p className=""></p>
                <div className="">
                    <input type="text" value="" />
                    <button className="btn" type="button">Submit</button>
                </div>
            </div>
            <p className="">{time}</p>
        </div>
    );
}

export default QuizPage;
