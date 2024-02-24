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
	  <Part parts={parts} />
	  <Total  total={parts} />
      </div>
  )
}

export default App
