import React, { useContext, useRef, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import Answer from './Answer'

function BookDetails({ book }) {
    const { removeBook } = useContext(BookContext)
    const myRef = useRef()
    const [revealAns, setRevealAns] = useState(true)
    const showAnswer = () => {
      setRevealAns(!revealAns)
    }
    
  return (
    <li >
        <div className='title'>{ book.title }</div>
        <p className='difficulty-text'>{book.difficulty}</p>
        <div className={revealAns ? 'author view' : 'author'} ref={myRef}>{ book.author }</div>
        <button className='answer-btn' onClick={showAnswer}>{revealAns ? 'Show Answer' : 'Hide Answer'}</button>
        
        </li>
  )
} 

export default BookDetails
