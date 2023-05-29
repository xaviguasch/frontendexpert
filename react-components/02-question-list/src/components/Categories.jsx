import React from 'react'

const Categories = ({ questionsByCategory, submissionsByQ }) => {
  console.log(questionsByCategory)
  return (
    <div>
      <h2>Categories</h2>
      {Object.keys(questionsByCategory).map((cat) => {
        return (
          <h2 key={cat}>
            {cat.toUpperCase()} - (pending number) / {cat.length}
          </h2>
        )
      })}
    </div>
  )
}

export default Categories
