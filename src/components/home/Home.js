// @flow
import React, { Component } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import Header from '../../elements/Header';
import styled from 'styled-components/native';
import Icon from '../../elements/Icon';
import { LOGO_HELPER } from '../common/utils';
import PaidList from './PaidList';
import MainList from './MainList';
import NotPaidList from './NotPaidList';

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

const { width } = Dimensions.get('window');

const IndicatorSize = (width - 40) / TABS.length;

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

const Tabs = styled.View`
  margin-top: 20;
  flex-direction: row;
  justify-content: space-around;
`;

const TabTitle = styled.Text`
  font-size: 16;
  text-align: center;
  width: ${IndicatorSize};
  color: white;
  font-weight: bold;
`;

const TabIndicator = styled.View`
  height: 4;
  border-radius: 2;
  background-color: ${props => props.color};
  width: ${IndicatorSize - 10};
  margin-top: 10;
`;

const TabButton = styled.TouchableOpacity`
  width: ${IndicatorSize};
  align-items: center;
  justify-content: center;
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
          <Tabs>
            {TABS.map((tab, i) => (
              <TabButton key={i} onPress={() => this.setList(tab.key)}>
                <TabTitle>{tab.title}</TabTitle>
                <TabIndicator color={tab.key === route_key ? 'white' : 'transparent'} />
              </TabButton>
            ))}
          </Tabs>
          {this.renderTabsContent()}
        </Content>
      </GradientBackground>
    );
  }
}

export default Home;
