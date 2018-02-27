import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

type InputType = {
  size: number,
  color: string,
};

const GasIcon = ({ size, color }: InputType) => (
  <Svg
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    x="0px"
    y="0px"
    viewBox="0 0 490.4 490.4"
    xmlSpace="preserve"
  >
    <Path
      fill={color}
      d="M177 227.5c-14.6 17.7-62.5 77.1-62.5 112.5 0 41.7 35.4 76 78.1 76s78.1-34.4 78.1-76c0-35.4-47.9-94.8-62.5-112.5-4.1-4.2-16.9-14-31.2 0zm52.1 111.4c0 19.8-15.6 35.4-36.5 35.4-19.8 0-36.5-15.6-36.5-35.4 0-11.5 16.7-40.6 36.5-66.7 19.8 27.2 37.5 55.3 36.5 66.7z"
    />
    <Path
      fill={color}
      d="M412.4 58.8h-27.1V21.3c0-11.5-9.4-20.8-20.8-20.8H20.8C9.3.5 0 9.9 0 21.3v447.8c0 11.5 9.4 20.8 20.8 20.8h343.7c11.5 0 20.8-9.4 20.8-19.8V100.4h26c20.8 0 37.5 15.6 37.5 35.4v277c0 11.5 9.4 20.8 20.8 20.8 11.5 0 20.8-9.4 20.8-20.8v-277c.1-42.7-35.3-77-78-77zm-68.8-17.7V139h-302V41.1h302zm-302 408.2V180.6h302v268.7h-302z"
    />
  </Svg>
);

GasIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default GasIcon;
