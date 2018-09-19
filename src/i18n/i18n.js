import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';
import { AsyncStorage, I18nManager } from 'react-native';

const STORAGE_KEY = '@APP:languageCode';

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true, // flags below detection to be async
		detect: async (callback) => {
      const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
      let lng = (savedDataJSON) ? savedDataJSON: null;
      if (I18nManager.isRTL) lng = 'ar';
      else lng = 'en';
      callback(lng);
    },
    cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: { en, ar},
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    cache: {
      enabled: true
    },
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });

export default i18n;
