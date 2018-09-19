import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { translate} from 'react-i18next';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

const propTypes = {
	t: PropTypes.func,
  i18n: PropTypes.object
};

class LanguageSwitcher extends React.Component {

	onChangeLang() {
		const lang = I18nManager.isRTL ? 'en' : 'ar';
		I18nManager.allowRTL(!I18nManager.isRTL);
		I18nManager.forceRTL(!I18nManager.isRTL);
		RNRestart.Restart();
	}

  render() {
		const { t, i18n } = this.props
    return (
			<Text onPress={() => this.onChangeLang()} style={{color: '#fff'}}>
				{ t('common:language', { lng: i18n.language }) }
			</Text>
		)
  }
}

LanguageSwitcher.propTypes = propTypes;

export default translate(['common'], { wait: true })(LanguageSwitcher);
