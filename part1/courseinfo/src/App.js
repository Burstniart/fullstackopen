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
	    <Header name={course} />
	    <Content part={parts[0].name} exercise={parts[0].exercises}  />
	    <Content part={parts[1].name} exercise={parts[1].exercises}  />
	    <Content part={parts[2].name} exercise={parts[2].exercises}  />
	    <Total exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} />
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
	    <Part name={prop.part} exercise={prop.exercise}/>
	    
       </div>
    )
}

const Part = (prop) => {
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
    let total = 0
    prop.exercises.map(exer =>  total += exer)
    return (
	<div>
	     <p>Number of exerecises { total }</p>
	</div>
    )
}

export default App
