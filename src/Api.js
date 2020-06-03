import React, { Component } from 'react'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {

    // const URL = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2&origin=*'
    const URL2 = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2';


    // const requestOptions = {
    //   mode: "no-cors",
    //   method: 'GET',
    //   // redirect: 'follow',
    //   // credentials: "same-origin", //include, same-origin
    //   // headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    // }

    fetch(URL2 {mode: "no-cors", method: "GET"})
      .then(result => result.json())
      .then(result => {
          this.setState({
              data: result
          })
      });
    }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry.name}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App
