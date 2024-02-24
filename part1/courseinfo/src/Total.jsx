import { useState } from 'react'

const Total = (props) => {
    const arr = [props.total.parts[0].exercises, props.total.parts[1].exercises, props.total.parts[2].exercises]
    return (
      <>
        <p>
            Number of exercises {arr.reduce((totals,sum) => { return totals + sum})}
	</p>
      </>
    )
}

export default Total
