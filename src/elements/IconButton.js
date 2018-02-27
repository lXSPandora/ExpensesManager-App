import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50;
  height: 50;
  border-radius: 10;
  background-color: ${props => props.color};
  border-color: ${props => props.border};
  border-width: 2;
`;

type Input = {
  children: React.ReactNode,
  backgroundColor: string,
  border: string,
  style: any,
  onPress: () => void,
};

const IconButton = ({ children, backgroundColor, border, style, onPress }: Input) => (
  <Wrapper border={border} color={backgroundColor} style={style} onPress={onPress}>
    {children}
  </Wrapper>
);

IconButton.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
export default IconButton;
