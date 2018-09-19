import * as React from 'react';
import Sidebar from 'screens/Sidebar';

export default class SidebarContainer extends React.Component {
  render() {
    return <Sidebar navigation={this.props.navigation} />;
  }
}
