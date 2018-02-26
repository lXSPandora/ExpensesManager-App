// @flow
import * as React from 'react';
import GradientBackground from '../../elements/GradientBackground';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { LOGO_HELPER } from '../common/utils';

const Logo = styled.Image`
  width: 60;
  height: 62;
  tint-color: white;
`;
class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('menu');
    }, 3000);
  }

  render() {
    return (
      <GradientBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatusBar backgroundColor="#00C5F9" barStyle="light-content" />
        <Logo source={LOGO_HELPER.BILL} />
      </GradientBackground>
    );
  }
}

export default SplashScreen;
