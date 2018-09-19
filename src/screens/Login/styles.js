import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logoWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 25,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 25,
    paddingLeft: 15
  }
});

export default styles;
