import React from 'react';
import Hello from './Hello';

export default class World extends React.Component {
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
}
