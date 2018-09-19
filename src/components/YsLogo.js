import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-native-remote-svg';

const propTypes = {
  isWhite: PropTypes.bool,
  inArabic: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
};

const defaultProps = {
  height: 50,
  width: 100,
  style: {},
};

const Logo = ({ style, isWhite, height, width }) => {
  const fill = isWhite ? '#fff' : '#2552A3';

  return (
    <Image
      source={require('assets/svgs/LogoEn.svg')}
      fill={fill}
      style={{ width: 110, height: 60 }}
    />
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
