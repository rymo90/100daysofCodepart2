class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "25",
      break: "5",
      length: "25"
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
      length: this.state.length - 1
    });
  }
  handlePlusSession() {
    this.setState({
      length: this.state.length + 1
    });
  }
  handleClick() {
    this.setState({
      break: "5",
      length: "25"
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

        <div id="session-label">Session Length</div>

        <button onClick={this.handleMinusSession} id="session-decrement">
          -
        </button>


        <button onClick={this.handlePlusSession} id="session-increment">
          +
        </button>
        <div id="break-length">5</div>
        <div id="session-length">25</div>
        <div id="timer-label">session</div>
        <div id="time-left">{this.state.time}</div>
        <button id="start_stop">start/stop</button>
        <button onClick={this.handleClick} id="reset">
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
