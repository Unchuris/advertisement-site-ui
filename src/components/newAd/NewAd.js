import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import TextField from 'material-ui/TextField';
import Img from 'react-image';
import { I18n } from 'react-redux-i18n';
import Button from '../button/Button';
import './style.css';
const hintStyle = {
  fontSize: '20px',
  fontWeight: '400',
  color: '#681834',
};
const inputStyle = {
  fontSize: '20px',
  fontWeight: '400',
  width: '100%',
  color: '#681834',
};
export default class NewAd extends Component {
  constructor() {
    super();
    this.state = {
      ad: {
        files: [ {
          base64: '',
        } ],
        textarea: '',
        inputValue: '',
      },
      hidden: true,
    };
    this.handleChangeInputField = this.handleChangeInputField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const { defaultAd } = this.props;
    if (defaultAd !== undefined) {
      const { ad } = this.state;
      ad.files[0].base64 = `data:image/png;base64,${defaultAd.Image}`;
      ad['textarea'] = defaultAd.Text;
      ad['inputValue'] = defaultAd.Title;
      this.setState({ ad });
    }
  }

  getFiles(files) {
    const { ad } = this.state;
    ad['files'] = files;
    this.setState({ ad });
  }
  handleChangeInputField(event) {
    const { ad } = this.state;
    ad[event.target.name] = event.target.value;
    this.setState({ ad });
  }

  handleSubmit(event) {
    if (this.state.ad.files.length > 0 && this.state.textarea !== '' && this.state.inputValue !== '') {
      this.props.create(this.state.ad);
    } else {
      this.setState({
        hidden: false,
      });
    }
    event.preventDefault();
  }

  render() {
    let base64Icon = this.state.ad.files.length === 0 ? '' : this.state.ad.files[0].base64;
    return (
      <div className='new-ad'>
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.title')}
        </div>
        <TextField onChange={this.handleChangeInputField}
          value={this.state.ad.inputValue}
          fullWidth={true}
          hintText={I18n.t('components.form.newAd.hintText')}
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          name='inputValue'
        />
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.textareaText')}
        </div>
        <TextField onChange={this.handleChangeInputField}
          textareaStyle={{
            overflow: 'hidden',
          }}
          value={this.state.ad.textarea}
          fullWidth={true}
          rows={1}
          rowsMax={4}
          hintText={I18n.t('components.form.newAd.hintText')}
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          name='textarea'
        />
        <FileBase64
          multiple={ true }
          onDone={ this.getFiles.bind(this) }
          name='files'
        />
        <Button type='submit'
          hidden={false}
          disabled={false}
          value={I18n.t('components.form.newAd.submit')}
          className={'button__new-ad'}
          handleClick={this.handleSubmit}
        />
        <div className='new-ad__error-text' hidden={this.state.hidden}>
          {I18n.t('components.form.newAd.error')}
        </div>
        <Img src={base64Icon} className='new-ad-images'/>
      </div>
    );
  }
}