import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from 'screens/Home';
import datas from './data';
import { fetchList } from './actions';

const propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object,
};

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.fetchList(datas);
  }
  render() {
    return <Home navigation={this.props.navigation} list={datas} />;
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});


HomeContainer.propTypes = propTypes;

export default connect(mapStateToProps, bindAction)(HomeContainer);
