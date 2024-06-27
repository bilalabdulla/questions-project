import React, { useContext, useState } from 'react'
import { QuestionContext } from '../contexts/QuestionContext'

function QuestionForm() {
   const { addQuestion } = useContext(QuestionContext)
   const [question, setQuestion] = useState('')
   const [answer, setAnswer] = useState('')
   const [difficulty, setDifficulty] = useState('Low')
   const handleSubmit = (e) => {
    e.preventDefault()
    addQuestion(question, answer, difficulty)
    setQuestion('')
    setAnswer('')
   }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Question' value={question} 
        onChange={(e) => setQuestion(e.target.value)} required/>
        <input type='text' placeholder='Provide Answer' value={answer} 
        onChange={(e) => setAnswer(e.target.value)} required/>
        <label for="difficulty"> Select Difficulty:  </label>
        <select value={difficulty} name='difficulty'
        onChange={(e) => setDifficulty(e.target.value)} required>
          <option>Low</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <input className='add-btn' type='submit' value='Add Your Question' />
    </form>
  )
}

export default QuestionForm
 