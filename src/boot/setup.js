import React from 'react';
import { Root, StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import AppNavigator from 'navigation/navigators';
import configureStore from './configureStore';

import { I18nextProvider, translate } from 'react-i18next';
import i18n from '../i18n/i18n';

import getTheme from 'theme/components';
import variables from 'theme/variables/platform';


const WrappedStack = ({t}) => {
  return <AppNavigator screenProps={{ t }} />;
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    // await Expo.Font.loadAsync({
    //   Roboto: require('native-base/Fonts/Roboto.ttf'),
    //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //   Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    // });

    this.setState({ isReady: true });
  }


  render() {
    // if (!this.state.isReady || this.state.isLoading) {
    //   return <Expo.AppLoading />;
    // }

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <I18nextProvider i18n={ i18n }>
            {/* Root used for native base toast */}
            <Root>
              <ReloadAppOnLanguageChange />
            </Root>
          </I18nextProvider>
        </Provider>
      </StyleProvider>
    );
  }
}

export default Setup;
