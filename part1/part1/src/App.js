import { useState } from 'react'

function App() {
    const [ counter, setCounter ] = useState(0)
    
    const handleClick = () => {
	setCounter(counter + 1)
	console.log('clicked', counter)
    }
    
    return (
	<div>
	    <div>{counter}</div>
	    <button onClick={handleClick}>Plus</button>
	</div>
  )
}

export default App;
