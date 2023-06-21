
function App(props) {
    const name = 'Lex'
    const age = 1
    const {counter} = props
    return (
/*	
    <div>
	  <h1>Greetings</h1>
	  <Hello name='Monika' age={age}/>
	  <Hello name={name} age={14+11}/>
    </div>
*/
    <div>{counter}</div>
  );
}

const Hello = (props) => {
    console.log(props)
    const age = props.age
    const name = props.name
    const bornYear = () => new Date().getFullYear() - age
    return (
     <div>
            <p>Hello {name}! you are {age} years old</p>
	    <p>You're probably born in {bornYear()}</p>
     </div>
  )
}

export default App;
