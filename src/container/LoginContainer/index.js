import React from 'react';
import InputField from './input';
import Login from 'screens/Login';
import Auth0 from 'react-native-auth0';
import { translate} from 'react-i18next';
import { Toast, Form } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength15, minLength8, email, alphaNumeric} from './validation'

const domain = 'extranet-staging.eu.auth0.com';
const clientID = 'UPVG0QyxBGcHlJKb1wPhTOhMvsv6cXr7';

const auth0 = new Auth0({
  domain: domain,
  clientId: clientID
});

class LoginForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: ''
    };
  }

  renderInput({input: { name, onChange, value }, meta: { touched, error }, label }) {

    let text;
    let fieldName;

    switch (name) {
      case 'email':
        fieldName = 'email';
        break;
      case 'password':
        fieldName = 'password';
        break;
      default:
        fieldName = '';
    }
    return (
      <InputField
        value={value}
        onChange={onChange}
        label={label}
        fieldName={fieldName}
        touched={touched}
        error={error}
      />
    );
  }

  handleChange = name => value => {
    this.setState({ [name]: value });
  }

  async login() {
    const { t } = this.props;
    if (this.props.valid) {
      auth0.auth
        .passwordRealm({
            username: this.state.email,
            password: this.state.password,
            realm: 'Username-Password-Authentication',
            scope: 'openid profile email',
            audience: 'https://' + domain + '/userinfo'
        })
        .then(credentials => {
          this.props.navigation.navigate('Drawer');
        })
        .catch(error => alert('Error', error));
    } else {
      Toast.show({
        text: t('login:error'),
        duration: 2000,
        type: 'danger',
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  render() {
    const { t, navigation } = this.props;
    const form = (
      <Form>
        <Field
          name='email'
          label={t('login:email')}
          component={this.renderInput}
          onChange={this.handleChange('email')}
          validate={[email, required]}
          />
        <Field
          name='password'
          label={t('login:password')}
          component={this.renderInput}
          onChange={this.handleChange('password')}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
      </Form>
    );
    return (
      <Login
        loginForm={form}
        navigation={navigation}
        onLogin={() => this.login()}
        t={t}
      />
    );
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(LoginForm);

export default translate(['common'], { wait: true })(LoginContainer);
