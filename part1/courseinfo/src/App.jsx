import { useState } from 'react'
import Header from './Header.jsx'
import Part from './Part.jsx'
import Total from './Total.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
	{
	    name: 'Fundamentals of React',
	    exercises: 10
	},
	{
	    name: 'Using props to pass data',
	    exercises: 7
	},
	{
	    name: 'State of a component',
	    exercises: 14
	}
    ]

  return (
    <div>
      <Header course={course} />
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
      <Total  total={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}/>
    </div>
  )
}

export default App
