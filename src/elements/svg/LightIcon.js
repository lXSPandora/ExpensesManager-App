import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Defs, Path } from 'react-native-svg';

type InputType = {
  size: number,
  color: string,
};

const LightIcon = ({ size, color }: InputType) => (
  <Svg width={size} height={size} data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32">
    <Defs />
    <Path
      fill={color}
      className="cls-1"
      d="M31.7 14h-9.83l9.36-14L.3 18h9.83L.77 32zm-24 2L24.77 6l-6.64 10h6.17L7.23 26l6.64-10z"
    />
  </Svg>
);

LightIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default LightIcon;
