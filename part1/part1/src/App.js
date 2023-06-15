
function App() {

  return (
    <div>
	  <h1>Greetings</h1>
	  <Hello name='Monika'/>
	  <Hello name='Lex'/>
    </div>
  );
}

const Hello = (props) => {
  return (
     <div>
          <p>Hello {props.name}!</p>
     </div>
  )
}

export default App;
