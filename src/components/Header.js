import React from 'react';
import PropTypes from 'prop-types';
import YsLogo from 'components/YsLogo';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { Header, Left, Right, View } from 'native-base';

const propTypes = {
	t: PropTypes.func,
  i18n: PropTypes.object
};

const index = ({ t, i18n }) => {
  return (
		<View>
			<Header>
				<Left />
				<Right>
					<LanguageSwitcher />
				</Right>
			</Header>
			<Header>
				<Left><YsLogo /></Left>
			</Header>
		</View>
  );
};

index.propTypes = propTypes;

export default index;
