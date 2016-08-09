import React, { Component } from 'react'
import './Board.css'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
        <h1>HELLO IM THE BOARD</h1>
        <Alphabet onPlay={this.props.onPlay}/>

      </div>
    )
  }
}

class Alphabet extends Component {
  wholeAlphabet () {
    return [...Array(26).keys()].map(
      (i) => <AlphaLetter onPlay={this.props.onPlay} character={String.fromCharCode(65 + i)}/>
    )
  }

  render () {
    return (
      <div>
        {this.wholeAlphabet()}
      </div>
    )
  }
}

class AlphaLetter extends Component {
  handleClick = () => {
    this.props.onPlay(this.props.character)
  }
  render () {
    return <button onClick={this.handleClick}>{this.props.character}</button>;
  }
}
 export default Board
