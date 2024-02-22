import { useState } from 'react'
import Header from './Header.jsx'
import Part from './Part.jsx'
import Total from './Total.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
    

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Total  total={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
