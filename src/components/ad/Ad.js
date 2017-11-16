import React, { Component } from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import Textarea from 'react-textarea-autosize';
import './style.css';
export default class Ad extends Component {

  render() {
    let base64Icon = `data:image/png;base64,${this.props.ad.Image}`;
    return (
      <div className='ad' name={this.props.ad.Title}>
        <VisibilitySensor>
          <Img src={base64Icon} className='ad-images'/>
        </VisibilitySensor>
        <div className='ad__title-text'>
          {this.props.ad.Title}
          <Textarea
            className='textarea'
            type='text'
            value={this.props.ad.Text}
            autoFocus={false}
          />
          Автор: {this.props.ad.Author}
        </div>
      </div>
    );
  }
}