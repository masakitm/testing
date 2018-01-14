import React, { Component } from 'react';
import './App.css';

const ListItem = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  )
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: [],
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const itemName = this.state.text
    this.setState((prevState) => ({
      items: prevState.items.concat(itemName),
      text: ""
    }))
  }

  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>
        <ListItem items={this.state.items} />
      </div>
    )
  }
}

export default App;
