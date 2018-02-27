// @flow
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import Header from '../../elements/Header';
import styled from 'styled-components/native';
import Icon from '../../elements/Icon';
import { LOGO_HELPER } from '../common/utils';
import PaidList from './PaidList';
import MainList from './MainList';
import NotPaidList from './NotPaidList';
import Tabs from '../../elements/Tabs';

const TABS = [
  {
    title: 'Todas',
    key: 'LIST',
  },
  {
    title: 'Não Pagas',
    key: 'NOT_PAID',
  },
  {
    title: 'Pagas',
    key: 'PAID',
  },
];

const Content = styled.View`
  padding-horizontal: 20;
  flex: 1;
`;

const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30;
  height: 30;
`;

const TABS_HELPER = {
  LIST: 'LIST',
  NOT_PAID: 'NOT_PAID',
  PAID: 'PAID',
};

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    route_key: 'LIST',
  };

  setList = (route_key: string) => {
    this.setState({
      route_key,
    });
  };

  goToAdd = () => this.props.navigation.navigate('addExpense');

  renderAddButton = () => {
    return (
      <ButtonWrapper onPress={this.goToAdd}>
        <Icon width={30} height={30} icon={LOGO_HELPER.ADD} />
      </ButtonWrapper>
    );
  };

  renderTabsContent = () => {
    const { route_key } = this.state;
    switch (route_key) {
      case TABS_HELPER.LIST:
        return <MainList />;
      case TABS_HELPER.NOT_PAID:
        return <NotPaidList />;
      case TABS_HELPER.PAID:
        return <PaidList />;
    }
  };
  render() {
    const { route_key } = this.state;
    return (
      <GradientBackground>
        <SafeAreaView />
        <Content>
          <Header title="Home" renderButton={this.renderAddButton} />
          <Tabs routes={TABS} onChangeIndex={key => this.setList(key)} actualRoute={route_key} indicatorColor="white" />
          {this.renderTabsContent()}
        </Content>
      </GradientBackground>
    );
  }
}

export default Home;
