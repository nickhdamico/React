import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleCounterIncrease() {
    this.setState({
      counter: ++this.state.counter
    });
  }

  handleCounterDecrease() {
    this.setState({
      counter: --this.state.counter
    });
  }

  render() {
    return(
      <div>
        <CounterLabel value={this.state.counter} />
        <CounterModifier
          onIncrease={this.handleCounterIncrease.bind(this)}
          onDecrease={this.handleCounterDecrease.bind(this)}
        />
      </div>
    );
  }
}

export default class CounterLabel extends Component {
  static get propTypes() {
    return {
      value: PropTypes.number.isRequired
    }
  }

  render() {
    return(
      <h1>El valor del contador es: {this.props.value}</h1>
    );
  }
}
export default class CounterModifier extends Component {
  static get propTypes() {
    return {
      onIncrease: PropTypes.func.isRequired,
      onDecrease: PropTypes.func.isRequired
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onIncrease}>Aumentar el valor!</button>
        <button onClick={this.props.onDecrease}>Disminuir el valor!</button>
      </div>
    );
  }
}







const content = document.getElementById('content');

ReactDOM.render(<SimpleComponent />, content);
