import React, { useContext, useRef, useState } from 'react'
import { QuestionContext } from '../contexts/QuestionContext'

function QuestionDetails({ question }) {
    const { removeQuestion } = useContext(QuestionContext)
    const myRef = useRef()
    const [revealAns, setRevealAns] = useState(true)
    const showAnswer = () => {
      setRevealAns(!revealAns)
    }
    
  return (
    <li >
        <div className='question'>{ question.question }</div>
        <p className='difficulty-text'>{question.difficulty}</p>
        <div className={revealAns ? 'answer view' : 'answer'} ref={myRef}>{ question.answer }</div>
        <button className='answer-btn' onClick={showAnswer}>{revealAns ? 'Show Answer' : 'Hide Answer'}</button>
        
        </li>
  )
} 

export default QuestionDetails
