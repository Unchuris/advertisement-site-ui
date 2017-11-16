import React, { Component } from 'react';
import Slick from '../../components/slick/Slick';
import FindAdvertisements from '../../components/findAdvertisements/FindAdvertisements';
import './style.css';

class Home extends Component {

  render(){
    return (
      <div>
        <Slick/>
        <div className='form-layout'>
          <div className='block__middle'>
            <FindAdvertisements/>
          </div>
          <div className='helper'/>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {

};
export default Home;