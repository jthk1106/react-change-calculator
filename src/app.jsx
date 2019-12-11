import React, { Component } from 'react';
import './app.css';
import { ETIME } from 'constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: '',
      received: '',
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

  }

  render() {
    console.log(`state.due: ${this.state.due}, state.received: ${this.state.received}`)
    return (
      <div>
        <h1 className='title'>Change Calculator</h1>
        <hr className='line' />

        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 leftSide'>
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className='leftSideTitle row'>Enter Information</h3>
                  <div className='row'>
                    <label>How much is due?</label>
                    <input className='inputs' value={ this.state.due } onChange={ this.dueInput } type="number" placeholder="how much?" />
                    <label>How much was received?</label>
                    <input className='inputs' value={ this.state.received } onChange={ this.receivedInput } type="number" placeholder="how much received?"/>
                  </div>
                  <div className='calcButtonContainer'>
                    <button className='calcButton row btn' onClick={ this.calculate }>Calculate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-8 rightSide'>
              <div className='row outcomeContainer'>
                <span className='outcome'>Success or Danger</span>
              </div>
              <div className='row denominations'>
                <div className='col-sm-3'>
                  <span>Twenties</span>
                  <br></br>
                  <span>{ this.state.twenties }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Tens</span>
                  <br></br>
                  <span>{ this.state.tens }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Fives</span>
                  <br></br>
                  <span>{ this.state.fives }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Ones</span>
                  <br></br>
                  <span>{ this.state.ones }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Quarters</span>
                  <br></br>
                  <span>{ this.state.quarters }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Dimes</span>
                  <br></br>
                  <span>{ this.state.dimes }</span>
                </div>
                <div className='col-sm-3'>
                  <span>Nickels</span>
                  <br></br>
                  <span>{ this.state.nickels }</span>
                </div>
                <div className='col-sm-3'>
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
