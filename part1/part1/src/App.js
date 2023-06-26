import { useState } from 'react'

function App() {
    const [ counter, setCounter ] = useState(0)
    console.log('rendering with counter value', counter)
    const increaseByOne = () =>	setCounter(counter + 1)
    console.log('increasing, value before', counter)
    const decreaseByOne = () =>	setCounter(counter - 1)
    console.log('decreasing, value before', counter)
    const setToZero =  () => setCounter(0)
    console.log('resetting to zero, value before', counter)
    
    return (
	<div>
	    <Display counter={counter} />
	    <Button handleClick={increaseByOne} text='Plus'/>
	    <Button handleClick={decreaseByOne} text='Minus'/>
    	    <Button handleClick={setToZero} text='Zero'/>
	</div>
  )
}

const Display = ({ counter }) =>  <div>{counter}</div>



const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
    
export default App;
