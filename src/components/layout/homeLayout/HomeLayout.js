import React from 'react';
import { Route } from 'react-router-dom';
import './style.css';
export const HomeLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <div className='layout'>
        {/* <Header props={}/>*/}
        <div id='wrapper'>
          <div className='content'>
            <Component {...matchProps} />
          </div>
        </div>
      </div>
    )} />
  );
};