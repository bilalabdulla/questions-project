import React, { createContext, useEffect, useState } from 'react'
import {v1 as uuidv1} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([{
        title: 'Write a function to print the name of the class: "class A"',
        author: 'class A',
        difficulty: 'Low'
    }, {
        title: 'Write a function to print the teachers name: "Mary"',
        author: 'Mary',
        difficulty: 'Low'
    }, {
        title: 'Write a function to print the names of the students in the class',
        author: 'Ravi, Aju, Mini SS, binu',
        difficulty: 'Low'
    }, {
        title: 'Write a function to print the IDs of all the students in the class',
        author: '101, 102, 103, 104',
        difficulty: 'Medium'
    }, {
        title: 'Write a function to print the subject names for a specific student',
        author: 'English, Maths, CHemistry, Physics, Computer',
        difficulty: 'Medium'
    }, {
        title: 'Write a function to print the marks of a specific student in all subjects',
        author: '25, 48, 40, 30, 20',
        difficulty: 'Low'
    }, {
        title: 'Write a function to print the average marks of a specific student in all subjects',
        author: '31',
        difficulty: 'Medium'
    }, {
        title: 'Write a function to print the total marks for a specific student',
        author: '176',
        difficulty: 'Low'
    }, {
        title: 'Write a function to print the average marks of all students in a specific subject',
        author: '34',
        difficulty: 'Hard'
    }, {
        title: 'Write a function to print the total marks of all students in a specific subject',
        author: '187',
        difficulty: 'Hard'
    }])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

        

    const addBook = (title, author, difficulty) => {
        setBooks([...books, {title, author, difficulty, id: uuidv1() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter((item) => {
           return item.id !== id
        }))
    }
    const removeAll = () => {
        setBooks([])
    }
    const sortBooks = () => {
        books.filter((item) => {
            return item.difficulty === 'low'
        })
    }
    return (
            <BookContext.Provider value={{books, addBook, removeBook, removeAll, sortBooks}}>
                { props.children }
            </BookContext.Provider>
      )
}


export default BookContextProvider
