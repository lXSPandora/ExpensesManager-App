import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Rect, Path } from 'react-native-svg';

type InputType = {
  size: number,
  color: string,
};

const CreditCardIcon = ({ size, color }: InputType) => (
  <Svg
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    xmlSpace="preserve"
  >
    <Path
      fill={color}
      d="M480 96H32c-17.688 0-32 14.313-32 32v256c0 17.688 14.313 32 32 32h448c17.688 0 32-14.313 32-32V128c0-17.687-14.312-32-32-32zm0 288H32V224h448v160zm0-224H32v-32h448v32z"
    />
    <Rect fill={color} x={64} y={320} width={64} height={32} />
    <Rect fill={color} x={160} y={320} width={64} height={32} />
    <Path
      fill={color}
      d="M336 352c12.344 0 23.5-4.813 32-12.469 8.5 7.656 19.656 12.469 32 12.469 26.5 0 48-21.5 48-48s-21.5-48-48-48c-12.344 0-23.5 4.813-32 12.469-8.5-7.656-19.656-12.469-32-12.469-26.5 0-48 21.5-48 48s21.5 48 48 48z"
    />
  </Svg>
);

CreditCardIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default CreditCardIcon;
