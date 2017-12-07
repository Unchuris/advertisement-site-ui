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
export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        files: [ {
          base64: '',
        } ],
        bio: '',
        email: '',
        name: '',
        phone: '',
        id: '',
      },
      hidden: true,
    };
    this.handleChangeInputField = this.handleChangeInputField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const { defaultProfile } = this.props;
    if (defaultProfile !== undefined) {
      const { profile } = this.state;
      profile.files[0].base64 = `data:image/png;base64,${defaultProfile.Image}`;
      profile['bio'] = defaultProfile.Bio;
      profile['email'] = defaultProfile.Email;
      profile['name'] = defaultProfile.Name;
      profile['phone'] = defaultProfile.Phone;
      profile['id'] = defaultProfile.Id;
      this.setState({ profile });
    }
  }

  getFiles(files) {
    const { profile } = this.state;
    profile['files'] = files;
    this.setState({ profile });
  }
  handleChangeInputField(event) {
    const { profile } = this.state;
    profile[event.target.name] = event.target.value;
    this.setState({ profile });
  }

  handleSubmit(event) {
    const { bio, email, name, phone } = this.state;
    if (bio !== '' && email !== '' && name !== '' && phone !== '') {
      this.props.edit(this.state.profile);
    } else {
      this.setState({
        hidden: false,
      });
    }
    event.preventDefault();
  }

  render() {
    let base64Icon = this.state.profile.files.length === 0 ? '' : this.state.profile.files[0].base64;
    return (
      <div className='new-ad'>
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.name')}
        </div>
        <TextField onChange={this.handleChangeInputField}
          value={this.state.profile.name}
          fullWidth={true}
          hintText={I18n.t('components.form.newAd.hintText')}
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          name='name'
        />
        <div className='new-ad__title-text'>
          {I18n.t('components.form.newAd.bio')}
        </div>
        <TextField onChange={this.handleChangeInputField}
          textareaStyle={{
            overflow: 'hidden',
          }}
          value={this.state.profile.bio}
          fullWidth={true}
          rows={1}
          rowsMax={4}
          hintText={I18n.t('components.form.newAd.hintText')}
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          name='bio'
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