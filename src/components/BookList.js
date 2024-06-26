import React, { useContext, useRef, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

function BookList() {
    const { books, removeBook, removeAll, sortBooks } = useContext(BookContext)
    const selectRef = useRef()
    const [select, setSelect] = useState('All')

  return books.length ? (
    <div className='book-list'>
      <label for='sort'>Sort by Difficulty:  </label>
      <select ref={selectRef} name='sort' onChange={(e) => setSelect(e.target.value)}>
       <option value='All'> All</option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='Hard'>Hard</option>
        
      </select>
      
      <ul>
      {/* <select onClick={() => sortBooks()}> */}
      
        {
            books.map((item) => {
               if (select === 'Low') { return  ( item.difficulty === 'Low' && <div className='all-books'> 
                    <BookDetails book={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeBook(item.id)}>Delete</button>
                        </div>
                 )
                } else if (select === 'Medium'){
                  return ( item.difficulty === 'Medium' && <div className='all-books'> 
                    <BookDetails book={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeBook(item.id)}>Delete</button>
                        </div>
                 )
                } else if (select === 'Hard'){
                  return ( item.difficulty === 'Hard' && <div className='all-books'> 
                    <BookDetails book={item} key={item.id}/>
                        <button className='delete-btn' onClick={() => removeBook(item.id)}>Delete</button>
                        </div>
                 )
                } else {
                  return (<div className='book-bottom'> 
                    <BookDetails book={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeBook(item.id)}>Delete</button>
                        </div>
                 )
                }
            })
        }
      </ul>
      { 
      <button className='remove-btn' onClick={() => removeAll()}>Remove All</button>
      }
    </div>
  ) : (
    <div className='empty'>You have no more questions</div>
  )
}

export default BookList

