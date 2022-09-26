import React, { useState, useEffect, useRef } from "react";
import quizzes from "../quizzes";

interface IQuizPageProps {
    quiz: string;
}

function QuizPage({ quiz }: IQuizPageProps) {
    const [time, setTime] = useState(75);
    const [question, setQuestion] = useState(quizzes[quiz].getQuestion());
    const answerRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime -= 1)
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="">
            <div className="">
                <p className="">{question.text}</p>
                <div className="">
                    <input type="number" className="input" ref={answerRef} />
                    <button className="btn" type="button" onClick={() => {
                        const answer = parseInt(answerRef.current.value, 10);
                        if (quizzes[quiz].checkAnswer(question.x, question.y, answer)) {
                            setQuestion(quizzes[quiz].getQuestion());
                            answerRef.current.value = "";
                        }
                    }}>
                        Submit
                    </button>
                </div>
            </div>
            <p className="">{time}</p>
        </div>
    );
}

export default QuizPage;
