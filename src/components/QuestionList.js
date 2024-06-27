import React, { useContext, useRef, useState } from 'react'
import { QuestionContext } from '../contexts/QuestionContext'
import QuestionDetails from './QuestionDetails'

function QuestionList() {
    const { questions, removeQuestion, removeAll, sortQuestions } = useContext(QuestionContext)
    const selectRef = useRef()
    const [select, setSelect] = useState('All')

  return questions.length ? (
    <div className='question-list'>
      <label for='sort'>Sort by Difficulty:  </label>
      <select ref={selectRef} name='sort' onChange={(e) => setSelect(e.target.value)}>
       <option value='All'> All</option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='Hard'>Hard</option>
        
      </select>
      
      <ul>
      
        {
            questions.map((item) => {
               if (select === 'Low') { return  ( item.difficulty === 'Low' && <div className='all-questions'> 
                    <QuestionDetails question={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeQuestion(item.id)}>Delete</button>
                        </div>
                 )
                } else if (select === 'Medium'){
                  return ( item.difficulty === 'Medium' && <div className='all-questions'> 
                    <QuestionDetails question={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeQuestion(item.id)}>Delete</button>
                        </div>
                 )
                } else if (select === 'Hard'){
                  return ( item.difficulty === 'Hard' && <div className='all-questions'> 
                    <QuestionDetails question={item} key={item.id}/>
                        <button className='delete-btn' onClick={() => removeQuestion(item.id)}>Delete</button>
                        </div>
                 )
                } else {
                  return (<div className='question-bottom'> 
                    <QuestionDetails question={item} key={item.id}/>
                        <button className='delete-btn'  onClick={() => removeQuestion(item.id)}>Delete</button>
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

export default QuestionList

