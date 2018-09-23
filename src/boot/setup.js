import React from 'react';
import { AsyncStorage, I18nManager } from 'react-native';
import { Root, StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import AppNavigator from 'navigation/navigators';
import configureStore from './configureStore';

import { I18nextProvider, translate } from 'react-i18next';
import i18n from '../i18n/i18n';

import getTheme from 'theme/components';
import variables from 'theme/variables/platform';

const WrappedStack = ({t}) => {
  const RTL = I18nManager.isRTL ? 'rtl' : 'ltr';
  return (<Root direction={RTL}><AppNavigator screenProps={{ t }} /></Root>);
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);


export const LngContext = React.createContext('lng');
const STORAGE_KEY = '@APP:languageCode';

// export const TranslateContext = React.createContext('lng');

class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
      lng: 'en'
    };
  }

  componentWillMount() {
    this.loadFonts();
    // this.getCurrentLanguage();
  }

  async getCurrentLanguage() {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    let lng = (savedDataJSON) ? savedDataJSON: null;
    if (I18nManager.isRTL) lng = 'ar';
    else lng = 'en';
    this.setState({
      lng: lng
    })
  }

  async loadFonts() {
    // await Font.loadAsync({
    //   Roboto: require('native-base/Fonts/Roboto.ttf'),
    //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //   Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    // });

    this.setState({ isReady: true });
  }


  render() {

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <I18nextProvider i18n={ i18n }>
            {/* Root used for native base toast */}
            <ReloadAppOnLanguageChange />
          </I18nextProvider>
        </Provider>
      </StyleProvider>
    );
  }
}

export default Setup;
