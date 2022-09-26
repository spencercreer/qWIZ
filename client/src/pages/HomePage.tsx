import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface IHomePageProps  {
    setQuiz: Dispatch<SetStateAction<string>>
}

function HomePage({ setQuiz }: IHomePageProps) {
    return (
        <div className="">
            <h1 className="">Math qWIZ</h1>
            <p className="">Answer as many math questions as you can within the time limit. </p>
            <p>Your timer will begin with seventy-five seconds. Incorrect answers will reduce your time by ten seconds!</p>
            <Link to="/quiz" className="btn" onClick={() => setQuiz("addition")}>Addition</Link>
            <Link to="/quiz" className="btn" onClick={() => setQuiz("subtraction")}>Subtraction</Link>
            <Link to="/quiz" className="btn" onClick={() => setQuiz("multiplication")}>Multiplication</Link>
            <Link to="/quiz" className="btn" onClick={() => setQuiz("division")}>Division</Link>
            {/* <Link to="/quiz" className="btn" onClick={() => setQuiz("computerScience")}>Computer Science</Link> */}
        </div>
    );
}

export default HomePage;
