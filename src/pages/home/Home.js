import React, { Component } from 'react';
import Slick from '../../components/slick/Slick';
import './style.css';

class Home extends Component {

  render(){
    return (
      <div>
        <Slick/>
        {/* <FindAdvertisements/>*/}
      </div>
    );
  }
}

Home.defaultProps = {

};
export default Home;