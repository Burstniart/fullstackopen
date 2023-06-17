const App = () => {
    // const=definitions
    
    const course = 'Half Stack application development'
    const part1 = {
	name: 'Fundamentals of React',
	exercises: 10
    }
    const part2 = {
	name: 'Using props to pass data',
	exercises: 7
    }
    const part3 = {
	name: 'State of a component',
	exercises: 14
    }
    
    return (
	<div>
	    <Header name={course} />
	    <Content part={part1.name} exercise={part1.exercises}  />
	    <Content part={part2.name} exercise={part2.exercises}  />
	    <Content part={part3.name} exercise={part3.exercises}  />
	    <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
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
