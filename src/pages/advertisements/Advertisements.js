import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18n } from 'react-redux-i18n';
import { getAdvertisements } from './action';
import './style.css';

class Advertisements extends Component {
  componentDidMount() {
    this.props.getAdvertisements();
  }
  renderAdvertisements() {
    if (this.props.data !== undefined) {
      if (this.props.data.length > 0) {
        return (
          this.props.data.map((elem) => (
            elem.Title
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

Advertisements.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    data: state.appCompReducerAdvertisements.advertisements,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAdvertisements: bindActionCreators(getAdvertisements, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Advertisements);