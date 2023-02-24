import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Number: 0
      }
    }

    increment() {
        this.setState({                      
            Number: this.state.Number + 1
        })
    }

  render() {
    return (
        <div>
      <h1>Number - {this.state.Number}</h1>
      <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter