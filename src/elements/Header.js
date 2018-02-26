import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 30;
  background-color: transparent;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: 20;
  margin-top: 20;
`;

type HeaderInput = {
  title: string,
  renderButton: () => React.ReactNode,
};

const Header = ({ title, renderButton }: HeaderInput) => (
  <Wrapper>
    <Title>{title}</Title>
    {renderButton()}
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  renderButton: PropTypes.func,
};

export default Header;
