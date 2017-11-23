import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/Header';
import './style.css';
export const HomeLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <div className='layout'>
        <Header location={matchProps.location}/>
        <div className='wrapper'>
          <div className='content'>
            <Component {...matchProps} />
          </div>
        </div>
      </div>
    )} />
  );
};