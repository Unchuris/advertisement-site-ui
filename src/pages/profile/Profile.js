import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18n } from 'react-redux-i18n';
import { editProfile, getProfile } from './action';
import EditProfile from '../../components/editProfile/EditProfile';
import './style.css';

class Profile extends Component {
  constructor() {
    super();
    this.edit = this.edit.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
  }
  edit(item) {
    let profile = {
      Bio: item.bio,
      Email: item.email,
      Name: item.name,
      Phone: item.phone,
      Id: item.id,
    };
    this.props.edit(profile);
    this.props.success ? this.props.history.push('/my-advertisements') : null;
  }
  renderProfiles() {
    if (this.props.data !== undefined) {
      if (this.props.data.length > 0) {
        return (
          this.props.data.map((elem) => (
            <EditProfile
              key={`profile-${elem.Id}`}
              defaultProfile={elem}
              edit={this.edit}
            />
          )
          ));
      }
    } else {
      return (
        <div>
          {I18n.t('pages.advertisements.text')}
        </div>
      );
    }
  }
  render(){
    return (
      <div>
        {this.renderProfiles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.appCompReducerProfile.profile,
    success: state.appCompReducerAdvertisement.success,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: bindActionCreators(getProfile, dispatch),
  edit: bindActionCreators(editProfile, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);