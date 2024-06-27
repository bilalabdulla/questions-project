import React, { createContext, useEffect, useState } from 'react'
import {v1 as uuidv1} from 'uuid'

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {

    const [questions, setQuestions] = useState([{
        question: 'Write a function to print the name of the class: "class A"',
        answer: 'class A',
        difficulty: 'Low'
    }, {
        question: 'Write a function to print the teachers name: "Mary"',
        answer: 'Mary',
        difficulty: 'Low'
    }, {
        question: 'Write a function to print the names of the students in the class',
        answer: 'Ravi, Aju, Mini SS, binu',
        difficulty: 'Low'
    }, {
        question: 'Write a function to print the IDs of all the students in the class',
        answer: '101, 102, 103, 104',
        difficulty: 'Medium'
    }, {
        question: 'Write a function to print the subject names for a specific student',
        answer: 'English, Maths, CHemistry, Physics, Computer',
        difficulty: 'Medium'
    }, {
        question: 'Write a function to print the marks of a specific student in all subjects',
        answer: '25, 48, 40, 30, 20',
        difficulty: 'Low'
    }, {
        question: 'Write a function to print the average marks of a specific student in all subjects',
        answer: '31',
        difficulty: 'Medium'
    }, {
        question: 'Write a function to print the total marks for a specific student',
        answer: '176',
        difficulty: 'Low'
    }, {
        question: 'Write a function to print the average marks of all students in a specific subject',
        answer: '34',
        difficulty: 'Hard'
    }, {
        question: 'Write a function to print the total marks of all students in a specific subject',
        answer: '187',
        difficulty: 'Hard'
    }])

    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions))
    }, [questions])

        

    const addQuestion = (question, answer, difficulty) => {
        setQuestions([...questions, {question, answer, difficulty, id: uuidv1() }])
    }
    const removeQuestion = (id) => {
        setQuestions(questions.filter((item) => {
           return item.id !== id
        }))
    }
    const removeAll = () => {
        setQuestions([])
    }
    const sortQuestions = () => {
        questions.filter((item) => {
            return item.difficulty === 'low'
        })
    }
    return (
            <QuestionContext.Provider value={{questions, addQuestion, removeQuestion, removeAll, sortQuestions}}>
                { props.children }
            </QuestionContext.Provider>
      )
}


export default QuestionContextProvider
