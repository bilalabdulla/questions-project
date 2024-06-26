import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookForm() {
   const { addBook } = useContext(BookContext)
   const [title, setTitle] = useState('')
   const [author, setAuthor] = useState('')
   const [difficulty, setDifficulty] = useState('Low')
   const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title, author, difficulty)
    setTitle('')
    setAuthor('')
   }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Question' value={title} 
        onChange={(e) => setTitle(e.target.value)} required/>
        <input type='text' placeholder='Provide Answer' value={author} 
        onChange={(e) => setAuthor(e.target.value)} required/>
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

export default BookForm
 