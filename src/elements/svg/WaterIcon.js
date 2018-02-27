import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

type InputType = {
  size: number,
  color: string,
};

const WaterIcon = ({ size, color }: InputType) => (
  <Svg
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 330 330"
    xmlSpace="preserve"
  >
    <Path
      fill={color}
      d="M175.59 4.393a14.999 14.999 0 0 0-21.213.002C150.114 8.657 49.992 110.003 49.992 215.016 49.992 278.418 101.577 330 164.984 330c63.424 0 115.024-51.582 115.024-114.984 0-105.014-100.155-206.361-104.418-210.623zM164.984 300c-46.864 0-84.991-38.124-84.991-84.984 0-73.72 60.105-149.624 85.003-177.899 24.914 28.239 85.012 104.023 85.012 177.899 0 46.86-38.142 84.984-85.024 84.984z"
    />
  </Svg>
);

WaterIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default WaterIcon;
