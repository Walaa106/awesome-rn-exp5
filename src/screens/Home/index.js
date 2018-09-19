import React from 'react';
import styles from './styles';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Text,
} from 'native-base';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list && this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate('Home', {
                    name: { item },
                  })
                }
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
