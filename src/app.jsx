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

    // TOTAL CHANGE
    const changeDue = Number((this.state.received - this.state.due).toFixed(2))
    this.setState({
      change: changeDue
    })

    let dollaz = Math.floor(changeDue)
    let cense = Math.floor((changeDue % 1) * 100)
    console.log(`change: ${changeDue}, dollaz: ${dollaz}, cense: ${cense}`)

    // TWENTIES
    if(dollaz%20 === 0) {
        this.setState({
          twenties: dollaz/20
        })
        dollaz = 0;
    } else {
        this.setState({
          twenties: Math.floor(dollaz/20)
        })
        dollaz = dollaz%20;
    };

    // TENS
    if(dollaz%10 === 0) {
        this.setState({
          tens: dollaz/10
        })
        dollaz = 0;
    } else {
        this.setState({
          tens: Math.floor(dollaz/10)
        })
        dollaz = dollaz%10;
    };

    // FIVES
    if(dollaz%5 === 0) {
        this.setState({
          fives: dollaz/5
        })
        dollaz = 0;
    } else {
        this.setState({
          fives: Math.floor(dollaz/5)
        })
        dollaz = dollaz%5;
    };

    // ONES
    if(dollaz < 5) {
        // pennies = cense;
        this.setState({
          ones: dollaz
        })
    }

    console.log(`cense before everything: ${cense}`)
    // QUARTERS
    if(cense%25 === 0) {
        // quarters = cense/25;
        this.setState({
          quarters: cense/25
        })
        cense = 0;
    } else {
        // quarters = Math.floor(cense/25);
        this.setState({
          quarters: Math.floor(cense/25)
        })
        cense = cense%25;
    };
    console.log(`cense after quarters check: ${cense}`)

    // DIMES
    if(cense%10 === 0) {
        //
        this.setState({
          dimes: cense/10
        })
        cense = 0;
    } else {
        // dimes = Math.floor(cense/10);
        this.setState({
          dimes: Math.floor(cense/10)
        })
        cense = cense%10;
    };
    console.log(`cense after dimes check: ${cense}`)

    // NICKELS
    if(cense%5 === 0) {
        //
        this.setState({
          nickels: cense/5
        })
        cense = 0;
    } else {
        // nickels = Math.floor(cense/5);
        this.setState({
          nickels: Math.floor(cense/5)
        })
        cense = cense%5;
    };
    console.log(`cense after nickels check: ${cense}`)

    // PENNIES
    if(cense < 5) {
        // pennies = cense;
        this.setState({
          pennies: cense
        })
    }
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
            <div className="panel panel-default align-middle">
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
              {/* <span className='outcome'>The total change due is ${this.state.change}</span> */}
              <span className={Math.sign(this.state.change) === 1 ? 'outcome alert alert-success' : 'outcome alert alert-danger'} role='alert'>The total change due is ${this.state.change}</span>
            </div>
            <div className='container'>
              <div className='row denominations'>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Twenties</span>
                  <br></br>
                  <span className='change'>{ this.state.twenties }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Tens</span>
                  <br></br>
                  <span className='change'>{ this.state.tens }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Fives</span>
                  <br></br>
                  <span className='change'>{ this.state.fives }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Ones</span>
                  <br></br>
                  <span className='change'>{ this.state.ones }</span>
                </div>
              </div>
              <div className='row denominations'>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Quarters</span>
                  <br></br>
                  <span className='change'>{ this.state.quarters }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Dimes</span>
                  <br></br>
                  <span className='change'>{ this.state.dimes }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Nickels</span>
                  <br></br>
                  <span className='change'>{ this.state.nickels }</span>
                </div>
                <div className='col-sm-3 align-self-center a-box'>
                  <span>Pennies</span>
                  <br></br>
                  <span className='change'>{ this.state.pennies }</span>
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
