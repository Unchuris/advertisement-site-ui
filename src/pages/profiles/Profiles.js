import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18n } from 'react-redux-i18n';
import { getProfiles } from './action';
import Profile from '../../components/profile/Profile';
import './style.css';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  renderProfiles() {
    if (this.props.data !== undefined) {
      if (this.props.data.length > 0) {
        return (
          this.props.data.map((elem) => (
            <Profile
              key={`profile-${elem.Id}`}
              item={elem}
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
    data: state.appCompReducerProfiles.profiles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProfiles: bindActionCreators(getProfiles, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);