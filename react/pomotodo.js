class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      second: 60,
      on: false
    };
    this.breakminus = this.breakminus.bind(this);
    this.breakplus = this.breakplus.bind(this);
    this.sessionminus = this.sessionminus.bind(this);
    this.sessionplus = this.sessionplus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stopstart = this.stopstart.bind(this);
  }
  breakminus() {
    if (this.state.break == 1) {
      this.setState({
        break: 1
      });
    } else {
      this.setState({
        break: this.state.break - 1
      });
    }
  }
  breakplus() {
    if (this.state.break == 60) {
      this.setState({
        break: 60
      });
    } else {
      this.setState({
        break: this.state.break + 1
      });
    }
  }
  sessionminus() {
    if (this.state.session == 1) {
      this.setState({
        session: 1
      });
    } else {
      this.setState({
        session: this.state.session - 1
      });
    }
  }
  sessionplus() {
    if (this.state.session == 60) {
      this.setState({
        session: 60
      });
    } else {
      this.setState({
        session: this.state.session + 1
      });
    }
  }
  handleClick() {
    this.setState({
      break: 5,
      session: 25
    });
  }

  stopstart() {
    let check= this.state.on
    this.setState({
      on: !this.state.on
    })

    if (check == true){
      this.start()
    }else{
      this.stop()
    }


  }
  start(){
    const timerID= setInterval(() => {
      let sec= this.state.second
      if(sec == 0){
        this.setState({
          session: this.state.session -1,
          second: 59
        })
      }else{
        this.setState({
          second: this.state.second -1
        })
      }
    }, 1000);

  }

  render() {
    return (
      <div className="App">
        <h1>Promodor Clock</h1>

        <div id="break-label">Break Length</div>

        <button onClick={this.breakminus} id="break-decrement">
          -
        </button>

        <button onClick={this.breakplus} id="break-increment">
          +
        </button>
        <h4 id="break-length">{this.state.break}</h4>

        <div id="session-label">Session Length</div>

        <button onClick={this.sessionminus} id="session-decrement">
          -
        </button>

        <button onClick={this.sessionplus} id="session-increment">
          +
        </button>
        <h4 id="session-length">{this.state.session}</h4>

        <div id="timer-label">session</div>
        <div id="time-left">{this.state.session + ":" + this.state.second} </div>
        <button onClick={this.stopstart} id="start_stop">
          start/stop
        </button>
        <div>{this.state.on && ("Start")} </div>
        <button onClick={this.handleClick} id="reset">
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
