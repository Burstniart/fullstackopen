import { useState } from 'react'

const Total = (props) => {
    const arr = [props.total[0].exercises, props.total[1].exercises, props.total[2].exercises]
    return (
      <>
        <p>
            Number of exercises {arr.reduce((totals,sum) => { return totals + sum})}
	</p>
      </>
    )
}

export default Total
