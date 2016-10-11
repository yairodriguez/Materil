import React from 'react';
import Hello from './Hello';

export default class World extends React.Component {
  static propTypes = {
    greet: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    greet: 'Hello'
  };

  constructor (props) {
    super(props);

    this.state = {
      greet: props.greet,
      value: 'Yair'
    };

    this.slangGreet = this.slangGreet.bind(this);
    this.slangHindi = this.slangHindi.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  slangGreet () {
    this.setState({ greet: 'Yo!' });
  }

  hindiGreet () {
    this.setState({ greet: 'Namaste' });
  }

  handleNameChange (event) {
    this.setState({ value: event.target.value });
  }

  render () {
    const renderGreeting = this.state.value
      ? `${this.state.value} says ${this.state.greet}`
      : this.state.greet;

    return (
      <div className='World-card'>
        <Hello greet={renderGreeting} message='World!' />
        <h2>
          <a href='#' onClick={this.slangGreet}>Slang</a>
          {' or '}
          <a href='#' onClick={this.slangHindi}>Hindi</a>
        </h2>
        <input
          type='text'
          value={this.state.value}
          placeholder='Enter a name'
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
