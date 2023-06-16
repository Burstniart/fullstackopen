
function App() {
    const name = 'Lex'
    const age = 1
  return (
    <div>
	  <h1>Greetings</h1>
	  <Hello name='Monika' age={age}/>
	  <Hello name={name} age={12+11}/>
    </div>
  );
}

const Hello = (props) => {
    console.log(props)
    return (
     <div>
            <p>Hello {props.name}! you are {props.age} years old</p>
     </div>
  )
}

export default App;
