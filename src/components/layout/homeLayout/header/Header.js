import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { I18n } from 'react-redux-i18n';

export default class Header extends Component {
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
            <NavLink
              className='nav__ref'
              activeClassName='nav__ref nav__ref-line'
              to='/'>
              {I18n.t('components.layout.header.signOut')}
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}
