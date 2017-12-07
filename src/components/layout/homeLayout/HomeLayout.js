import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header/Header';
import Header2 from '../authenticatedLayout/header/Header';
import './style.css';
const HomeLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <div className='layout'>
        { !rest.isAuthenticated ?
          <Header location={matchProps.location}/> :
          <Header2/>
        }
        <div className='wrapper'>
          <div className='content'>
            <Component {...matchProps} />
          </div>
        </div>
      </div>
    )} />
  );
};
HomeLayout.defaultProps = {
  isAuthenticated: false,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.appCompReducerAuthenticated.success,
});
export default connect(mapStateToProps, null)(HomeLayout);