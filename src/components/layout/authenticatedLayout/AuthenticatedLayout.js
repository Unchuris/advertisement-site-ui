import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '../authenticatedLayout/header/Header';
import { authenticated } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './style.css';

const AuthenticatedLayout = ({ component: Component, ...props }) => {
  props.checkAuthenticated();
  if (props.isAuthenticated) {
    return (
      <Route {...props} render={(matchProps) => (
        <div className='layout'>
          <Header/>
          <div className='wrapper'>
            <div className='content'>
              <Component {...matchProps} />
            </div>
          </div>
        </div>
      )}/>
    );
  } else {
    return <Redirect to={{
      pathname: '/advertisements',
      state: { signin: true },
    }}/>;
  }
};
const { element, func, bool } = PropTypes;

AuthenticatedLayout.propTypes = {
  component: PropTypes.oneOfType([
    element,
    func,
  ]).isRequired,
  isAuthenticated: bool,
};
AuthenticatedLayout.defaultProps = {
  isAuthenticated: false,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.appCompReducerAuthenticated.success,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthenticated: bindActionCreators(authenticated, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedLayout);