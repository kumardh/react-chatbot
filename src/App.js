import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showChat: false
    }
  }

  startChat = () => {
    this.setState({
      showChat : true
    })
  }

  hideChat = () => {
    this.setState({
      showChat : false
    })
  }

  render() {
    return (
      <>
      <div className = "header">
        <h2>My Application!!!</h2>
      </div>
      <div className = "content">
        <div className ="navSection">
          <h3>My Navigation</h3>
        </div>
        <div className ="contentSection">
          <div style = {{padding:"20px"}}>
            <h1>Content of my application will go here.....</h1>
            <p>Sample content to fill the gap as much as possible. Sample content to fill the gap as much as possible.
            Sample content to fill the gap as much as possible.Sample content to fill the gap as much as possible.</p>
            <p>More content to fill the available area of the main contect. More content to fill the available area of the main contect.
            More content to fill the available area of the main contect.More content to fill the available area of the main contect. </p>
          </div>
        </div>
      </div>
      <div className = "footer">Footer</div>
      <div className = "bot">
        <div style ={{display: this.state.showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div>
          {this.state.showChat ? <SimpleForm></SimpleForm> : null}
        </div>      */}
        <div>
          {!this.state.showChat 
            ? <button className="myButton" onClick={() => this.startChat()}>click to chat... </button> 
            : <button className="myButton" onClick={() => this.hideChat()}>click to hide... </button>}
        </div>
      </div>      
      </>
    )
  }
}

export default App;