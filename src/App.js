import React, { Component } from 'react';
import Table from './Table'

const name = 'Tania'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Welcome, {name}</h1>
        </div>
        <div className="container">
          <Table />
        </div>
      </React.Fragment>
    )
  }
}

export default App
