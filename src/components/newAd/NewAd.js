import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import TextField from 'material-ui/TextField';
import Img from 'react-image';
import Textarea from 'react-textarea-autosize';
import { I18n } from 'react-redux-i18n';
import './style.css';
export default class NewAd extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      Textarea: '',
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInputField = this.handleChangeInputField.bind(this);
  }

  getFiles(files) {
    this.setState({ files: files });
  }
  handleChangeInputField(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  handleChange(event) {
    this.setState({
      Textarea: event.target.value,
    });
  }

  render() {
    let base64Icon = this.state.files.length === 0 ? '' : this.state.files[0].base64;
    return (
      <div className='new-ad'>
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.title')}
        </div>
        <TextField onChange={this.handleChangeInputField}
          value={this.state.inputValue}
          fullWidth={true}
          hintText={I18n.t('components.form.newAd.hintText')}
          hintStyle={{
            fontSize: '24px',
            fontWeight: '400',
            color: '#681834',
          }}
          inputStyle={{
            fontSize: '24px',
            fontWeight: '400',
            width: '100%',
            color: '#681834',
          }}/>
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.text')}
        </div>
        <Textarea
          className='input-textarea'
          type='text'
          value={this.state.Textarea}
          onChange={this.handleChange.bind(this)}
          autoFocus={false}
        />
        <FileBase64
          multiple={ true }
          onDone={ this.getFiles.bind(this) }
        />
        <Img src={base64Icon} className='new-ad-images'/>
      </div>
    );
  }
}