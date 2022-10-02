import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Quizzes } from "../types/types";

interface IHomePageProps  {
    setQuiz: Dispatch<SetStateAction<Quizzes>>
}

function HomePage({ setQuiz }: IHomePageProps) {
    console.log(~5)
    return (
        <div>
            <div className="flex justify-center my-4">
                <h1 className="text-4xl">qWIZ</h1>
            </div>
            <div className="flex justify-center my-4">
                <p>Answer as many math questions as you can within the time limit. Your timer will begin with seventy-five seconds. Incorrect answers will reduce your time by ten seconds!</p>
            </div>
            <div className="flex justify-center my-4">
                <Link to="/quiz" className="btn" onClick={() => setQuiz(Quizzes.ADDITION)}>Addition</Link>
                <Link to="/quiz" className="btn" onClick={() => setQuiz(Quizzes.SUBTRACTION)}>Subtraction</Link>
                <Link to="/quiz" className="btn" onClick={() => setQuiz(Quizzes.MULTIPLICATION)}>Multiplication</Link>
                <Link to="/quiz" className="btn" onClick={() => setQuiz(Quizzes.DIVISION)}>Division</Link>
                <Link to="/quiz" className="btn" onClick={() => setQuiz(Quizzes.COMP_SCIENCE)}>Computer Science</Link>
            </div>
        </div>
    );
}

export default HomePage;
