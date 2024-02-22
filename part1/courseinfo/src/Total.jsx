import { useState } from 'react'

const Total = (props) => {
    return (
      <>
        <p>
            Number of exercises {props.total.reduce((totals,sum) => { return totals + sum})}
	</p>
      </>
    )
}

export default Total
