import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Homepage from './Homepage'
import { UserContext, defaultUser } from './user-context'

class App extends Component {
  constructor(props) {
    super(props)

    this.fountainOfYouth = () => {
      this.setState(state => {
        return {
          user: {
            name: state.user.name,
            age: state.user.age - 1,
            photo: state.user.photo
          }
        }
      })
    }

    this.state = {
      user: defaultUser,
      fountainOfYouth: this.fountainOfYouth
    }
  }

  async componentWillMount() {
    const response = await axios.get('/api/user')
    const user = response.data
    this.setState({ user })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserContext.Provider value={this.state}>
          <Homepage />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
