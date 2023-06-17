const App = () => {
    // const=definitions
    
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
	    <Header  name={course} />
	    <Content parts={parts} />
	    <Total   parts={parts} />
	</div>
    )
}

// Header renders course name
const Header = (prop) => {
    
    return (
	<div>
	    <h1>{ prop.name }</h1>
	</div>
    )
}

// Content renders parts & number of exercises
const Content = (prop) => {
    return (
	<div>
	    <Part name={prop.parts[0].name} exercise={prop.parts[0].exercises} />
	    <Part name={prop.parts[1].name} exercise={prop.parts[1].exercises} />
	    <Part name={prop.parts[2].name} exercise={prop.parts[2].exercises} />
       </div>
    )
}

const Part = (prop) => {
    console.log('part', prop)
    return (
	<div>
	    <p>
		{prop.name} {prop.exercise}
	    </p>
	</div>
    )
}

// Total renders the total number of exercises
const Total = (prop) => {
    let exercises=[]
    exercises.push(prop.parts[0].exercises)
    exercises.push(prop.parts[1].exercises)
    exercises.push(prop.parts[2].exercises)
    let total = 0
    exercises.map(exer =>  total += exer)
    return (
	<div>
	     <p>Number of exerecises { total }</p>
	</div>
    )
}

export default App
