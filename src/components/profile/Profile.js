import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import { withRouter } from 'react-router';
import './style.css';

class Profile extends Component {

  render() {
    const { item } = this.props;
    return (
      <div className='ad' name={item.ProfileName}>
        <div className='ad__title-text'>
          {item.AdvertisementsCount}
          Логин: {item.Username}
          Автор: {item.ProfileName}
          {item.ProfileBio}
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);