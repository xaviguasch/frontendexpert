import React, { useState, useEffect } from 'react'

import categories from './Categories'

import { dataQuestions } from '../data/question'
import { dataSubmissions } from '../data/submissions'
import Categories from './Categories'

const getQuestionsByCategory = (qs) => {
  const qsByCat = {}

  qs.forEach(({ category, ...question }) => {
    if (!qsByCat[category]) {
      qsByCat[category] = []
    }

    qsByCat[category].push(question)
  })

  return qsByCat
}

const getSubmissionsByQ = (submissions) => {
  const submissionByQuestion = {}

  submissions.forEach(({ status, questionId }) => {
    return (submissionByQuestion[questionId] = status)
  })

  return submissionByQuestion
}

const QuestionList = () => {
  const [questions, setQuestions] = useState(dataQuestions)
  const [submissions, setSubmissions] = useState(dataSubmissions)

  const questionsByCategory = getQuestionsByCategory(questions)
  const submissionsByQ = getSubmissionsByQ(submissions)

  return (
    <div>
      <h1>QuestionsList</h1>

      <Categories
        questionsByCategory={questionsByCategory}
        submissionsByQ={submissionsByQ}
      />
    </div>
  )
}

export default QuestionList
