import { useState } from "react"

const Question = () => {
  const [question, setQuestion] = useState([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])

  const handleOnChange = (event) => {
    const answer = parseInt(event.target.value)
    if (answer === question[0] * question[1]) {
      setQuestion([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      event.target.value = ''
    }

  }
  return (
    <>
    <div>{`${question[0]} x ${question[1]}`}</div>
    <input onChange={handleOnChange}/>
    </>
  )
}

export default Question