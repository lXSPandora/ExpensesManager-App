import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

type InputType = {
  color: string,
  textColor: string,
  value: string,
  label: string,
  onChangeText: () => void,
  width: number,
};

const Wrapper = styled.TextInput`
  background-color: ${props =>
    props.color ? props.color : 'rgba(216, 216, 216, 0.6)'};
  padding-horizontal: 25;
  padding-vertical: 15;
  border-radius: 30;
  width: ${props => props.width};
  color: ${props => props.textColor};
  font-weight: bold;
  font-size: 18;
  margin: 10px;
`;

const Input = ({
  color,
  textColor,
  value,
  label,
  onChangeText,
  width,
  ...props
}: InputType) => (
  <Wrapper
    color={color}
    textColor={textColor}
    placeholderTextColor={textColor}
    value={value}
    onChangeText={onChangeText}
    placeholder={label}
    width={width}
    underlineColorAndroid="transparent"
    {...props}
  />
);

Input.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  width: PropTypes.number,
};
export default Input;
