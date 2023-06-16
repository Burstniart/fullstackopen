const App = () => {
    // const=definitions
    
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const exercises = [10, 7, 14]    
    return (
	<div>
	    <Header name={course} />
	    <Content part={part1} exercise={exercises1}  />
	    <Content part={part2} exercise={exercises2}  />
	    <Content part={part3} exercise={exercises3}  />
	    <Total exercises={exercises} />

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
	    <p>
		{prop.part} {prop.exercise}
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
