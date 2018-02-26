// @flow
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import styled from 'styled-components/native';

const Background = styled(GradientBackground)`
  flex: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 30;
  margin-top: 40;
  margin-left: 10;
`;

const Content = styled.ScrollView`
  padding-horizontal: 20;
`;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Background>
        <SafeAreaView />
        <Content>
          <Title>Home</Title>
        </Content>
      </Background>
    );
  }
}

export default Home;
