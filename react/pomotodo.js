class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25


    };
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handlePlusSession = this.handlePlusSession.bind(this);
    this.handleMinusSession = this.handleMinusSession.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleMinusClick() {
    this.setState({
      break: this.state.break - 1
    });
  }
  handlePlusClick() {
    this.setState({
      break: this.state.break + 1
    });
  }
  handleMinusSession() {
    this.setState({
      session: this.state.session - 1
    });
  }
  handlePlusSession() {
    this.setState({
      session: this.state.session + 1
    });
  }
  handleClick() {
    this.setState({
      break: 5,
      session: 25
    });
  }

  intervaller() {
    setInterval(this.tick(), 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>Promodor Clock</h1>

        <div id="break-label">Break Length</div>

        <button onClick={this.handleMinusClick} id="break-decrement">
          -
        </button>

        <button onClick={this.handlePlusClick} id="break-increment">
          +
        </button>
        <h4 id="break-length">{this.state.break}</h4>

        <div id="session-label">Session Length</div>

        <button onClick={this.handleMinusSession} id="session-decrement">
          -
        </button>


        <button onClick={this.handlePlusSession} id="session-increment">
          +
        </button>
        <h4 id="session-length">{this.state.session}</h4>

        <div id="timer-label">session</div>
        <div id="time-left">{this.state.session + ":00"} </div>
        <button id="start_stop">start/stop</button>
        <button onClick={this.handleClick} id="reset">
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
