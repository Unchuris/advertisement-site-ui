import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { I18n } from 'react-redux-i18n';
class Header extends Component {
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
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;