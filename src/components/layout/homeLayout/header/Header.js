import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { I18n } from 'react-redux-i18n';
import ModalWindow from '../../../modalWindow/ModalWindow';
import SignUp from '../../../signUp/SignUp';
import SignIn from '../../../signIn/SignIn';
let isOpen = false;
class Header extends Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.modalIsOpen = this.modalIsOpen.bind(this);
  }

  open() {}
  close() {}
  modalIsOpen() {
    this.refs.sign.close();
  }
  render() {
    this.props.location.state !== undefined ?
      isOpen = this.props.location.state.signin
      : isOpen = false;
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
              to='/profiles'>
              {I18n.t('components.layout.header.profiles')}
            </NavLink>
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/advertisement/create'>
              {I18n.t('components.layout.header.create')}
            </NavLink>
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/my-advertisements'>
              {I18n.t('components.layout.header.userAd')}
            </NavLink>
            <div className='header__modal-window'>
              <ModalWindow
                ref='modalSignIn'
                closeStyle='header__modal-close-up'
                openText={I18n.t('components.layout.header.signIn')}
                closeModal={this.close}
                openModal={this.open}
                default={isOpen}
              >
                <SignIn
                  modalClose={() => this.refs.modalSignIn.closeModal()}
                />
              </ModalWindow>
            </div>
            <div className='header__modal-window'>
              <ModalWindow
                ref='modalSignUp'
                closeStyle='header__modal-close-up'
                openText={I18n.t('components.layout.header.signUp')}
                closeModal={this.close}
                openModal={this.open}
                default={false}
              >
                <SignUp
                  modalClose={() => this.refs.modalSignUp.closeModal()}
                />
              </ModalWindow>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;