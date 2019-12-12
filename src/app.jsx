import React, { Component } from 'react';
import './app.css';
import { ETIME } from 'constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: '',
      received: '',
      change: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    this.dueInput = this.dueInput.bind(this);
    this.receivedInput = this.receivedInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  dueInput(e) {
    this.setState({
      due: e.target.value
    })
  }

  receivedInput(e) {
    this.setState({
      received: e.target.value
    })
  }

  calculate() {
    this.setState({
      change: this.state.received - this.state.due
    })

  }

  render() {
    console.log(`this.state.due: ${this.state.due}, this.state.received: ${this.state.received}, this.state.change: ${this.state.change}`)
    return (
      <div className='container'>
        <div className='row justify-content-around'>
          <h1 className='title col-sm-12'>Change Calculator</h1>
          <hr className='line col-sm-12' />
        </div>
        <div className='row justify-content-around'>
          <div className='col-sm-4 leftSide'>
            <div className="panel panel-default">
              <div className='panel-heading'>Enter Information</div>
              <div className="panel-body">
                <label>How much is due?</label>
                <input className='inputs' value={ this.state.due } onChange={ this.dueInput } type="number"/>
                <label>How much was received?</label>
                <input className='inputs' value={ this.state.received } onChange={ this.receivedInput } type="number"/>
                <div className='panel-footer'>
                  <button className='calcButton btn' onClick={ this.calculate }>Calculate</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-8 rightSide'>
            <div className='row outcomeContainer'>
              <span className='outcome'>Success or Danger</span>
            </div>
            <div className='container'>
              <div className='row denominations'>
                <div className='col-sm-3 align-self-center'>
                  <span>Twenties</span>
                  <br></br>
                  <span>{ this.state.twenties }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Tens</span>
                  <br></br>
                  <span>{ this.state.tens }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Fives</span>
                  <br></br>
                  <span>{ this.state.fives }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Ones</span>
                  <br></br>
                  <span>{ this.state.ones }</span>
                </div>
              </div>
              <div className='row denominations'>
                <div className='col-sm-3 align-self-center'>
                  <span>Quarters</span>
                  <br></br>
                  <span>{ this.state.quarters }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Dimes</span>
                  <br></br>
                  <span>{ this.state.dimes }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Nickels</span>
                  <br></br>
                  <span>{ this.state.nickels }</span>
                </div>
                <div className='col-sm-3 align-self-center'>
                  <span>Pennies</span>
                  <br></br>
                  <span>{ this.state.pennies }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
