import React, { Component } from 'react'
import Word from './Word'
import Board from './Board'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'WINNING',
      used: [],
      matched: []
    }
  }

  onPlay = (character) => {
    console.log(character)
    let matched = this.state.matched
    let solution = this.state.solution
    let used = this.state.used

    used.push(character)

    for (let i = 0; i < solution.length; i++) {
      if (character === solution[i]) {
        matched.push(character)
        if (matched.length === solution.length) {
          alert("YOU WIN!");
        }
      }
    }
    if (used.length === 6) {
      alert("YOU LOSE")
      this.setState({
        used: [],
        matched: []
      })
    }

    this.setState({
      used: this.state.used,
      matched: this.state.matched
    })
  }

  render () {
    return <div className='App'>
      <h1>Hangman!</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay} />
    </div>
  }
}

export default App
