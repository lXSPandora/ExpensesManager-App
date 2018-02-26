import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from './Icon';
import { LOGO_HELPER } from '../components/common/utils';

type NextFloatingButtonType = {
  color: string,
  iconColor: string,
};

const Wrapper = styled.TouchableOpacity`
  background-color: ${props => props.color};
  align-items: center;
  justify-content: center;
  width: 70;
  height: 70;
  border-radius: 35;
  position: absolute;
  bottom: 20;
  right: 20;
`;

const NextFloatingButton = ({
  color,
  iconColor,
  ...props
}: NextFloatingButtonType) => (
  <Wrapper color={color} {...props}>
    <Icon
      tintColor={iconColor}
      width={20}
      height={20}
      icon={LOGO_HELPER.ARROW}
    />
  </Wrapper>
);
NextFloatingButton.propTypes = {
  color: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};
export default NextFloatingButton;
