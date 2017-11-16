import React, { Component } from 'react';
import Img from 'react-image';
import './style.css';
export default class Ad extends Component {

  render() {
    let base64Icon = `data:image/png;base64,${this.props.ad.Image}`;
    return (
      <div className='ad' name={this.props.ad.Title}>
        <div className='ad__title-text'>
          {this.props.ad.Title}
          {this.props.ad.Text}
          {this.props.ad.Author}
        </div>
        <Img src={base64Icon}/>
      </div>
    );
  }
}