import React, { Component } from 'react';
import './App.css';

const color = [
  'red',
  'blue',
  'yellow'
]

class Modal extends Component {
  render () {
    const isModalOn = this.props.showModal ? 'modalOn' : 'modalOff'
    const classList = isModalOn + ' ' + color[0]
    return (
      <div id="modal" className={classList} onClick={this.props.parentMethod} />
    )
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
    console.log(this.state.showModal)
  }

  render () {
    return (
      <div>
        <Modal
          showModal={this.state.showModal}
          parentMethod={this.toggleModal}
        />
        <button onClick={this.toggleModal}>toggleModal</button>
      </div>
    )
  }
}

export default App;
