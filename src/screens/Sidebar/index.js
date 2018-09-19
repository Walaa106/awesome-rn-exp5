import React from 'react';
import { Text, Container, List, ListItem, Content } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';

const routes = [
  {
    route: 'Home',
    caption: 'Home',
  },
  {
    route: 'Login',
    caption: 'Logout',
  },
];

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    data.route === 'Login'
                      ? this.props.navigation.dispatch(resetAction)
                      : this.props.navigation.navigate(data.route);
                  }}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}