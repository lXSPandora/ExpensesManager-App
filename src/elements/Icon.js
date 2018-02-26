import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Wrapper = styled.Image`
  width: ${props => props.width};
  height: ${props => props.width};
  tint-color: ${props => (props.tintColor ? props.tintColor : 'white')};
  z-index: 2;
`;

type IconType = {
  width: number,
  height: number,
  tintColor?: string,
  icon?: any,
};

const Icon = ({ width, height, tintColor, icon, ...props }: IconType) => (
  <Wrapper width={width} height={height} tintColor={tintColor} source={icon} {...props} />
);

Icon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  tintColor: PropTypes.string,
  icon: PropTypes.any,
};

export default Icon;
