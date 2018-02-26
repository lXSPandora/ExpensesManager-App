import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.TouchableOpacity`
  padding-horizontal: ${props => (props.padding ? props.padding : 40)};
  padding-vertical: 15;
  border-radius: 30;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  margin-vertical: 10;
`;

const Text = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${props => props.textColor};
`;

type ButtonProps = {
  color: string,
  textColor: string,
  title: string,
  padding: number,
};

const Button = ({
  color,
  textColor,
  title,
  padding,
  onPress,
  ...props
}: ButtonProps) => (
  <Wrapper padding={padding} color={color} onPress={onPress} {...props}>
    <Text textColor={textColor}>{title}</Text>
  </Wrapper>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  padding: PropTypes.number,
  onPress: PropTypes.func,
};

export default Button;
