import React, { Component } from 'react';
import Slick from '../../components/slick/Slick';
import FindAdvertisements from '../../components/findAdvertisements/FindAdvertisements';
import './style.css';

class Home extends Component {

  render(){
    return (
      <div>
        <Slick/>
        <div className='block__middle'>
          <FindAdvertisements/>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {

};
export default Home;