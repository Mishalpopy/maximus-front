'use client'
import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({
      value: prevState.value > 0 ? prevState.value - 1 : 0,
    }));
  }

  render() {
    return (
      <div>
        <p>Set the quantity</p>
        <div className="quantity-input">
          <button
            className="quantity-input__modifier quantity-input__modifier--left"
            onClick={this.decrement}
          >
            &mdash;
          </button>
          <input
            className="quantity-input__screen"
            type="text"
            value={this.state.value}
            readOnly
          />
          <button
            className="quantity-input__modifier quantity-input__modifier--right"
            onClick={this.increment}
          >
            &#xff0b;
          </button>
        </div>
      </div>
    );
  }
}

export default Quantity;
