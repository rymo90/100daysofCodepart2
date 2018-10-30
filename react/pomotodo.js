class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 1,
      second: 0,
      isToggleOn: false,
      breaktime: false
    };
    this.breakminus = this.breakminus.bind(this);
    this.breakplus = this.breakplus.bind(this);
    this.sessionminus = this.sessionminus.bind(this);
    this.sessionplus = this.sessionplus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stopstart = this.stopstart.bind(this);
  }
  breakminus() {
    let brk= this.state.break == 1?
    this.setState({break:1}):
    this.setState({break:this.state.break-1})

  }
  breakplus() {
    let brk= this.state.break == 60?
    this.setState({break:60}):
    this.setState({break:this.state.break+1})

  }
  sessionminus() {
    let ses= this.state.session == 1?
    this.setState({session:1}):
    this.setState({session:this.state.session-1})
  }
  sessionplus() {
    let ses= this.state.session == 60?
        this.setState({session:60}):
    this.setState({session:this.state.session+1})

  }
  handleClick() {
    clearInterval(this.timer);
    this.setState({
      break: 5,
      session: 25,
      second: 0,
      isToggleOn: false
    });
  }


  stopstart = () => {
    this.setState(state => {
      let toggle = state.isToggleOn? clearInterval(this.timer):
      this.timer = setInterval(() => {
          let sec = this.state.second == 0 ?
          this.state.breaktime ?
              this.setState({second:59,break:this.state.break-1}):

          this.setState({ second: 59, session:this.state.session -1 }):
          this.setState({
              second: this.state.second - 1
            });
        }, 100);

      return { isToggleOn: !state.isToggleOn };
    });
  };
  componentWillUnmount(strses) {
    strses ="Break"
    clearInterval(this.timer);
    return strses
  }
  Break(){
   this.setState({breaktime:!this.state.breaktime})
  }

  render() {
    let sec = this.state.second
    let min= this.state.session
    let strses= "Session"
    let brk = this.state.break

    min=  min  < 10  ? "0"+min : min
    sec = sec < 10 ? "0"+ sec: sec
    let display = min +":"+ sec
    display = min == "0"+-1 && sec == 59 ?    this.componentWillUnmount(strses): display


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

        <div id="timer-label">{strses}</div>
        <div id="time-left">{display}</div>
        <button onClick={this.stopstart} id="start_stop">
          start/stop
        </button>

        <button onClick={this.handleClick} id="reset">
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
