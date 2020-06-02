import React from 'react'

const TableHeader = (props) => {

  const { addStateMagic } = props 

  return (
    <React.Fragment>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
          <th><button onClick={() => addStateMagic()}>Magic Button: Click to populate</button></th>
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default TableHeader
