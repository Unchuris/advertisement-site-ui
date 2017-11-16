import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import withRouter from 'react-router-dom/es/withRouter';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Button from '../button/Button';
import './style.css';
class FindAdvertisements extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInputField = this.handleChangeInputField.bind(this);
    this.state = {
      inputValue: '',
      checked: {
        one: false,
        two: false,
        three: false,
        four: false,
      },
    }
    ;
  }
  handleChangeInputField(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  handleSubmit(event) {
    this.props.history.push(`/advertisements?text=${this.state.inputValue}`);
    event.preventDefault();
  }
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: {
          one: !oldState.checked.one,
        },
      };
    });
  }
  render() {
    const checkboxStyle = {
      checkbox: {
        display: 'inline-block',
        width: '20px',
        color: '#39393a',
        fontSize: '14px',
        fontWeight: '400',
        marginBottom: 18,
      },
    };
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='find-ad__wrapper'>
        <div className='find-ad__content'>
          <div className='find-ad__title-text'>
            {I18n.t('components.form.ad.title')}
          </div>
          <TextField onChange={this.handleChangeInputField}
            value={this.state.inputValue}
            fullWidth={true}
            hintText={I18n.t('components.form.ad.hintText')}
            underlineFocusStyle={{
              borderColor: '#4a3fe1',
            }}
            hintStyle={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#ffefd5',
            }}
            inputStyle={{
              fontSize: '16px',
              fontWeight: '400',
              width: '100%',
              color: '#ffefd5',
            }}/>
          {/* <Checkbox*/}
          {/* checkedIcon={<ActionFavorite />}*/}
          {/* uncheckedIcon={<ActionFavoriteBorder />}*/}
          {/* checked={this.state.checked.one}*/}
          {/* onCheck={this.updateCheckOne.bind(this)}*/}
          {/* style={checkboxStyle.checkbox}*/}
          {/* />*/}
          <div className='checkbox'/>
          <Button type='submit'
            hidden={false}
            disabled={false}
            value={I18n.t('components.form.ad.submit')}
            className={'button__find-ad'}
            handleClick={this.handleSubmit}/>
        </div>
      </form>
    );
  }
}
export default withRouter(FindAdvertisements);