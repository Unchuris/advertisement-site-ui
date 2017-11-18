import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import './style.css';

class FormLayout extends Component {
  render() {
    return (
      <div className='form-layout'>
        <div className='logo__title'>
          {I18n.t('components.layout.header.signUp')}
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