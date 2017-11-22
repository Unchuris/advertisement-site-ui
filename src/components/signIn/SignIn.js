import React, { Component } from 'react';
import FormLayout from '../formLayout/FormLayout';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import PasswordField from 'material-ui-password-field';
import { signIn } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18n } from 'react-redux-i18n';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        password: '',
        name: '',
      },
      isValid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    if (this.state.formData.password.length > 7) {
      this.props.signIn(this.state.formData);
    }
  }

  render() {
    const { formData } = this.state;
    return (
      <FormLayout>
        <ValidatorForm
          ref='form'
          onSubmit={this.handleSubmit}
        >
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
          <RaisedButton
            type='submit'
            label='sign-in'
            className='sign-up__button'
          />
        </ValidatorForm>
      </FormLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    success: state.appCompReducerSignIn.success,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: bindActionCreators(signIn, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);