import React, { Component } from 'react';
import './style.css';

class FormLayout extends Component {
  render() {
    return (
      <div className='form-layout'>
        <div className='logo__title'>
          {this.props.textTitle}
        </div>
        <div className='form_container'>
          {this.props.children}
        </div>
        <div className='helper'/>
      </div>
    );
  }
}
export default FormLayout;