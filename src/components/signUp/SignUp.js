import React, { Component } from 'react';
import FormLayout from '../formLayout/FormLayout';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import PasswordField from 'material-ui-password-field';
import { signUp } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';
import './style.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        name: '',
        repeatPassword: '',
      },
      isValid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === this.state.formData.password;
    });
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    if (event.target.name === 'password') {
      this.setState({ isValid: event.target.value.length > 7 });
    }
  }

  handleSubmit() {
    if (this.state.formData.password.length > 7) {
      this.props.signUp(this.state.formData);
      this.props.success ? this.props.modalClose() : null;
    }
  }
  onClick() {
    this.setState({ isValid: this.state.formData.password.length > 7 });
  }

  render() {
    const { formData } = this.state;
    return (
      <FormLayout textTitle ={I18n.t('components.layout.header.signUp')}>
        <ValidatorForm
          ref='form'
          onSubmit={this.handleSubmit}
        >
          <TextValidator
            floatingLabelText='Email'
            onChange={this.handleChange}
            name='email'
            value={formData.email}
            validators={[ 'required', 'isEmail' ]}
            errorMessages={[ 'this field is required', 'email is not valid' ]}
            fullWidth={true}
          />
          <TextValidator
            floatingLabelText='Name'
            onChange={this.handleChange}
            name='name'
            value={formData.name}
            validators={[ 'required' ]}
            errorMessages={[ 'this field is required' ]}
            fullWidth={true}
          />
          <PasswordField
            floatingLabelText='Enter your password'
            onChange={this.handleChange}
            name='password'
            type='password'
            errorText={this.state.isValid ? '' : 'At least 8 characters' }
            value={formData.password}
            fullWidth={true}
          />
          <TextValidator
            floatingLabelText='Repeat password'
            onChange={this.handleChange}
            name='repeatPassword'
            type='password'
            validators={[ 'required', 'isPasswordMatch' ]}
            errorMessages={[ 'password mismatch', 'this field is required' ]}
            value={formData.repeatPassword}
            fullWidth={true}
          />
          <RaisedButton
            type='submit'
            label='sign-up'
            onClick={this.onClick}
            className='sign-up__button'
          />
        </ValidatorForm>
      </FormLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    success: state.appCompReducerSignUp.success,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: bindActionCreators(signUp, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));