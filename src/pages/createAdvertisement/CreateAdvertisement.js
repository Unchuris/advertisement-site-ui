import React, { Component } from 'react';
import NewAd from '../../components/newAd/NewAd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';
import { createAd } from './action';
import './style.css';

class CreateAdvertisement extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }
  create(event) {
    let ad = {

    };
    this.props.create(ad);
    this.props.success ? this.props.history.push('/advertisements') : null;
  }

  render() {
    return (
      <div>
        <div className='block__create-ad'>
          <NewAd
            create={this.create}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.appCompReducerCreateAdvertisement.success,
  };
};

const mapDispatchToProps = (dispatch) => ({
  create: bindActionCreators(createAd, dispatch),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAdvertisement));