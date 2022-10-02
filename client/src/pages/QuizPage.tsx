import React, { useState, useEffect, useRef } from "react";
import quizzes from "../quizzes";

interface IQuizPageProps {
    quiz: string;
}

function QuizPage({ quiz }: IQuizPageProps) {
    const [time, setTime] = useState(10);
    const [question, setQuestion] = useState(quizzes[quiz].getQuestion());
    const answerRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        let x = 10;
        const timer = setInterval(() => {
            if (x > 0) {
                x -= 1;
                setTime(x);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const submitAnswer = () => {
        const answer = parseInt(answerRef.current.value, 10);
        if (quizzes[quiz].checkAnswer(question.x, question.y, answer)) {
            setQuestion(quizzes[quiz].getQuestion());
            answerRef.current.value = "";
        }
        answerRef.current.focus();
    }

    return (
        <>
            <div className="grid grid-cols-4 my-4">
                <div className="col-start-2">
                    <p className="px-2 float-right">{question.text}</p>
                </div>
                <input
                    type="number"
                    className="input"
                    ref={answerRef}
                    onBlur={submitAnswer}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            submitAnswer()
                        }
                    }}
                />
            </div>
            <div className="flex justify-center my-4">
                <button className="btn" type="button" onClick={submitAnswer}>
                    Submit
                </button>
                <p className="">{time}</p>
            </div>
        </>
    );
}

export default QuizPage;
