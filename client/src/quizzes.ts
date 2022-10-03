interface IQuiz {
    getQuestion: () => {x: number, y: number, text: string};
    checkAnswer: (x: number, y: number, ans: number) => boolean;
}

interface IQuizzes {
    [key: string]: IQuiz,
    addition: IQuiz,
    subtraction: IQuiz,
    multiplication: IQuiz,
    division: IQuiz,
    computerScience: IQuiz,
    // twoComp: IQuiz,
}

const quizzes: IQuizzes = {
    addition: {
        getQuestion: () => {
            const x = Math.ceil(Math.random() * 100);
            const y = Math.ceil(Math.random() * 100);
            return { x, y, text: `${x} + ${y} = ` };
        },
        checkAnswer: (x: number, y: number, ans: number) => {
            return x + y === ans;
        }
    },
    subtraction: {
        getQuestion: () => {
            const x = Math.ceil(Math.random() * 100);
            const y = Math.ceil(Math.random() * 100);
            return { x, y, text: `${x} - ${y} = ` };
        },
        checkAnswer: (x: number, y: number, ans: number) => {
            return x - y === ans;
        }
    },
    multiplication: {
        getQuestion: () => {
            const x = Math.ceil(Math.random() * 10);
            const y = Math.ceil(Math.random() * 10);
            return { x, y, text: `${x} x ${y} = ` };
        },
        checkAnswer: (x: number, y: number, ans: number) => {
            return x * y === ans;
        }
    },
    division: {
        getQuestion: () => {
            const x = Math.ceil(Math.random() * 10);
            const y = Math.ceil(Math.random() * 10);
            return { x, y, text: `${x} / ${y} = ` };
        },
        checkAnswer: (x: number, y: number, ans: number) => {
            return x / y === ans;
        }
    },
    computerScience: {
        getQuestion: () => {
            const x = Math.ceil(Math.random() * 100);
            // I need to retype the return to make y optional
            const y = 0;
            return { x, y, text: x.toString(2)}
        },
        checkAnswer: (x: number, y: number, ans: number) => {
            return ans === x;
        }
    },
    // hexDec: {
    //     getQuestion: () => {
    //         const x = Math.ceil(Math.random() * 1000);
    //         // I need to retype the return to make y optional
    //         const y = 0;
    //         return { x, y, text: x.toString(16)}
    //     },
    //     checkAnswer: (x: number, y: number, ans: number) => {
    //         return ans === x;
    //     }
    // },

}

export default quizzes;
