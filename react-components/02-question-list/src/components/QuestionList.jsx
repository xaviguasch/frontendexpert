import React, { useState, useEffect } from 'react'

import { dataQuestions } from '../data/question'
import { dataSubmissions } from '../data/submissions'

const QuestionList = () => {
  const [questions, setQuestions] = useState(dataQuestions)
  const [submissions, setSubmissions] = useState(dataSubmissions)

  return <div>QuestionList</div>
}

export default QuestionList
