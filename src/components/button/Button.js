import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleClick(event);
  }

  render() {
    const { type, className, value, hidden, id } = this.props;
    return (
      <button
        type={type}
        className={`button ${className}`}
        onClick={this.handleClick}
        hidden={hidden}
        id={Number(id)}
        disabled={this.props.disabled}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  hidden: PropTypes.bool,
  id: PropTypes.number,
};

Button.defaultProps = {
  value: '',
  type: 'button',
  hidden: false,
  disabled: false,
  id: 0,
};