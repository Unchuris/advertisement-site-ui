import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { I18n } from 'react-redux-i18n';
import ModalWindow from '../../../modalWindow/ModalWindow';
import SignUp from '../../../signUp/SignUp';
export default class Header extends Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    console.log('open');
  }
  close() {
    console.log('close');
  }
  render() {
    return (
      <div className='header-wrapper'>
        <header>
          <NavLink exact className='logo' to='/'>
            {I18n.t('components.layout.header.logo')}
          </NavLink>
          <nav className='main-text'>
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/advertisements'>
              {I18n.t('components.layout.header.ad')}
            </NavLink>
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/'>
              {I18n.t('components.layout.header.create')}
            </NavLink>
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/'>
              {I18n.t('components.layout.header.signIn')}
            </NavLink>
            <div className='header__modal-window'>
              <ModalWindow
                closeStyle='header__modal-close-up'
                openText={I18n.t('components.layout.header.signUp')}
                closeModal={this.close}
                openModal={this.open}
              >
                <SignUp/>
              </ModalWindow>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
