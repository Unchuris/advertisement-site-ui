import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import { withRouter } from 'react-router';
import Img from 'react-image';
import './style.css';

class Profile extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const { item } = this.props;
    let link = `/advertisements?text=&author=${item.Id}`;
    this.props.history.push(link);
  }
  render() {
    const { item } = this.props;
    let base64Icon = `data:image/png;base64,${item.Image}`;
    return (
      <div className='profile' name={item.ProfileName}>
        <div className='profile__image'>
          <Img src={base64Icon}/>
        </div>
        <div className='profile__block__info'>
          <div
            className='profile__info profile__count'
            onClick={this.onClick}
          >
            {I18n.t('components.profile.adCount')}:
            {item.AdvertisementsCount}
          </div>
          <div className='profile__info'>
            {I18n.t('components.profile.login')}:
            {item.Username}
          </div>
          <div className='profile__info'>
            {I18n.t('components.profile.name')}:
            {item.ProfileName}
          </div>
          <div className='profile__info'>
            {I18n.t('components.profile.bio')}:
            {item.ProfileBio}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);