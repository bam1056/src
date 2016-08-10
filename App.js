import React, { Component } from 'react'
import Word from './Word'
import Board from './Board'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      solutionArray: ['WINNING','STORK','BABY','ALLIGATOR','DOG','PEOPLE','TRAIN','AIRPLANE','POST', 'CHINA'],
      solution: 'STEAK',
      used: [],
      matched: []
    }
  }

  onPlay = (character) => {
    console.log(character)
    let matched = this.state.matched
    let solution = this.state.solution
    let used = this.state.used

    this.setState({
      used: this.state.used,
      matched: this.state.matched
    })

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
  }
  // randomWordIndex = () => {
  //   let num = Math.floor(Math.random() * (this.state.solutionArray.length))
  //   return num
  // }
  //
  // setSolution = (num) => {
  //   setState({solution: solutionArray[num]})
  //
  // }

  render () {

    return <div className='App'>
      <h1>Hangman!</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay} />
    </div>
  }
}

export default App
