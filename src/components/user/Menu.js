// @flow
import * as React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import Button from '../../elements/Button';
import styled from 'styled-components/native';
import Icon from '../../elements/Icon';
import { LOGO_HELPER } from '../common/utils';

const { width } = Dimensions.get('window');

const ButtonSize = (width - 50) / 2;

const ActionButtons = styled(Button)`
  width: ${ButtonSize};
`;

const Container = styled.ScrollView`
  margin-bottom: 20;
  margin-horizontal: 20;
`;

const Title = styled.Text`
  font-size: 23;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10;
`;

const Description = styled.Text`
  font-size: 20;
  color: #f9f9f9;
  font-weight: 500;
  text-align: left;
  margin-bottom: 50;
`;

const LogoContainer = styled.View`
  justify-content: flex-start;
  justify-content: center;
  margin-top: 70;
  margin-bottom: 40;
`;

const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 30;
  left: 10;
  right: 10;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

class Menu extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <GradientBackground>
        <SafeAreaView />
        <Container>
          <LogoContainer>
            <Icon
              width={100}
              height={102}
              tintColor="white"
              icon={LOGO_HELPER.BILL}
            />
          </LogoContainer>
          <Title>Welcome to Expense Manager</Title>
          <Description>
            Here you can manage your expenses using a fun way! make the login or
            sign up to discover more!
          </Description>
        </Container>
        <ButtonsContainer>
          <ActionButtons
            color="white"
            textColor="#2FDBCF"
            title="Login"
            onPress={() => this.props.navigation.navigate('login')}
          />
          <ActionButtons
            color="white"
            textColor="#2FDBCF"
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('signup')}
          />
        </ButtonsContainer>
      </GradientBackground>
    );
  }
}
export default Menu;
