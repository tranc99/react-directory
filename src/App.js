import React, { Component } from 'react';
import Table from './Table'

const name = 'Tania'

class App extends Component {

  state = {
    characters: [
      {
        name: 'Nancy',
        job: 'Janitor'
      },
      {
         name: 'Mac',
         job: 'Bouncer'
      },
      {
         name: 'Jaime',
         job: 'Aspiring actress'
       },
      {
         name: 'Denise',
         job: 'Bartender'
      }
    ]
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {

    const characters = this.state.characters

    return (
      <React.Fragment>
        <div className="container">
          <h1>Welcome, {name}</h1>
          <p>View directory of active professionals</p>
        </div>
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
