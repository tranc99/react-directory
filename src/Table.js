import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
  render() {

    const { characterData, removeCharacter, addStateMagic } = this.props

    return (
      <table>
        <TableHeader addStateMagic={addStateMagic} />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table
