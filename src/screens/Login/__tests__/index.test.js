import 'react-native';
import React from 'react';
import Login from '../';
import renderer from 'react-test-renderer';

const onLogin = jest.fn();
const loginForm = React.Component;

it('renders correctly', () => {
  const tree = renderer.create(<Login onLogin={onLogin} loginForm={<loginForm />} t={(translation)=>translation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
