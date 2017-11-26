import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18n } from 'react-redux-i18n';
import { getUserAdvertisements } from './action';
import Ad from '../../components/ad/Ad';
import './style.css';

class UserAdvertisements extends Component {
  componentDidMount() {
    this.props.getAdvertisements();
  }
  renderAdvertisements() {
    if (this.props.data !== undefined) {
      if (this.props.data.length > 0) {
        return (
          this.props.data.map((elem) => (
            <Ad key={`advertisement-${elem.Id}`} ad={elem}/>
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
        {this.renderAdvertisements()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.appCompReducerUserAdvertisements.advertisements,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAdvertisements: bindActionCreators(getUserAdvertisements, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdvertisements);