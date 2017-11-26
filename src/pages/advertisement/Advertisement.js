import React, { Component } from 'react';
import NewAd from '../../components/newAd/NewAd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { getAdvertisement, editAdvertisement } from './action';
import './style.css';

class Advertisement extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }
  componentDidMount() {
    this.props.getAdvertisement(this.props.match.params.id);
  }
  create(item) {
    let ad = {
      Title: item.inputValue,
      Text: item.textarea,
      Image: item.files[0].base64.split('base64,')[1],
      Id: this.props.match.params.id,
    };
    this.props.edit(ad);
    this.props.success ? this.props.history.push('/my-advertisements') : null;
  }

  renderAdvertisement() {
    if (this.props.data !== undefined) {
      if (this.props.data.length > 0) {
        return (
          <NewAd
            defaultAd={this.props.data[0]}
            create={this.create}
          />
        );
      }
    } else {
      return (
        <div/>
      );
    }
  }

  render() {
    return (
      <div>
        <div className='block__create-ad'>
          {this.renderAdvertisement()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.appCompReducerAdvertisement.advertisement,
    success: state.appCompReducerAdvertisement.success,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAdvertisement: bindActionCreators(getAdvertisement, dispatch),
  edit: bindActionCreators(editAdvertisement, dispatch),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Advertisement));