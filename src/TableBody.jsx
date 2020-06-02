import React from 'react'

const TableBody = (props) => {

  const characters = props.characterData

  const rows = characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
      </tr>
    )
  })

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

export default TableBody
