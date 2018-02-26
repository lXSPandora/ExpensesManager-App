import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({ children, style, error }) => (
  <LinearGradient
    style={{ flex: 1, ...style }}
    colors={error === true ? ['#F90000', '#FF4000'] : ['#0090FF', '#60DFDE']}
  >
    {children}
  </LinearGradient>
);

GradientBackground.propTypes = {
  children: PropTypes.any,
  error: PropTypes.bool,
};

GradientBackground.defaultProps = {
  error: false,
};

export default GradientBackground;
