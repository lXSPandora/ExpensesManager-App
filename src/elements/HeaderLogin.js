import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from './Icon';
import { LOGO_HELPER } from '../components/common/utils';

const Wrapper = styled.View`
  flex-direction: column;
  background-color: transparent;
  padding-horizontal: 20;
  padding-top: 10;
  padding-bottom: 10;
`;

const BackButton = styled.TouchableOpacity`
  width: 27;
  height: 27;
  align-items: center;
  justify-content: center;
  margin-bottom: 15;
`;

const Title = styled.Text`
  font-size: 30;
  font-weight: 700;
  color: white;
`;

type HeaderInput = {
  title: string,
  backAction: () => void,
};

const HeaderLogin = ({ title, backAction, logo }: HeaderInput) => (
  <Wrapper>
    <BackButton onPress={backAction}>
      <Icon width={27} height={27} tintColor="white" icon={logo ? logo : LOGO_HELPER.BACK_ICON} />
    </BackButton>
    <Title>{title}</Title>
  </Wrapper>
);

HeaderLogin.propTypes = {
  title: PropTypes.string.isRequired,
  backAction: PropTypes.func.isRequired,
  logo: PropTypes.any,
};

export default HeaderLogin;
