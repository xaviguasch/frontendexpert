import React, { useState, useEffect } from 'react'

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions'
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions'

function useQuestionsAndSubmissions() {
  // API CORS issue to fix
}

const QuestionList = () => {
  const [questions, submissions] = useQuestionsAndSubmissions()

  return <div>QuestionList</div>
}

export default QuestionList
