import React, { Component } from 'react';
import NewAd from '../../components/newAd/NewAd';
import './style.css';

class CreateAdvertisement extends Component {

  render(){
    return (
      <div>
        <div className=''>
          <NewAd/>
        </div>
      </div>
    );
  }
}

CreateAdvertisement.defaultProps = {

};
export default CreateAdvertisement;