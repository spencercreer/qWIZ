import { useState, useEffect } from "react"

const Timer = () => {
    const [timer, setTimer] = useState(70)

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
    }, [timer])

  return (
    <div>{timer}</div>
  )
}

export default Timer