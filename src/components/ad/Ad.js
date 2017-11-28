import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import Textarea from 'react-textarea-autosize';
import { I18n } from 'react-redux-i18n';
import { withRouter } from 'react-router';
import './style.css';
import Button from '../button/Button';
class Ad extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const { ad } = this.props;
    let link = `/advertisement/${ad.Id}`;
    this.props.history.push(link);
  }

  render() {
    const { ad, editButton } = this.props;
    let base64Icon = `data:image/png;base64,${ad.Image}`;
    return (
      <div className='ad' name={ad.Title}>
        <VisibilitySensor>
          <Img src={base64Icon} className='ad-images'/>
        </VisibilitySensor>
        <div className='ad__title-text'>
          {ad.Title}
          <Textarea
            className='textarea'
            type='text'
            value={ad.Text}
            autoFocus={false}
          />
          Автор: {ad.Author}
          <Button
            type='button'
            hidden={!editButton}
            disabled={false}
            value={I18n.t('components.form.newAd.edit')}
            className={'button__new-ad'}
            handleClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}
Ad.propTypes = {
  editButton: PropTypes.bool,
};

Ad.defaultProps = {
  editButton: false,
};
export default withRouter(Ad);