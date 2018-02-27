import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Wrapper = styled.View`
  margin-top: 20;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.backgroundColor};
`;

const TabTitle = styled.Text`
  font-size: 18;
  text-align: center;
  width: ${props => props.size};
  color: white;
  font-weight: bold;
`;

const TabIndicator = styled.View`
  height: 4;
  border-radius: 2;
  background-color: ${props => props.color};
  width: ${props => props.size - 10};
  margin-top: 10;
`;

const TabButton = styled.TouchableOpacity`
  width: ${props => props.size};
  align-items: center;
  justify-content: center;
`;

type routesTabs = {
  title: string,
  key: string,
};

type TabsInput = {
  actualRoute: string,
  routes: Array<routesTabs>,
  indicatorColor: string,
  backgroundColor: string,
  onChangeIndex: (key: string) => void,
};

const Tabs = ({ actualRoute, routes, indicatorColor, backgroundColor, onChangeIndex }: TabsInput) => {
  const IndicatorSize = (width - 40) / routes.length;
  const color = indicatorColor ? indicatorColor : 'white';
  return (
    <Wrapper backgroundColor={backgroundColor ? backgroundColor : 'transparent'}>
      {routes.map((tab, i) => (
        <TabButton size={IndicatorSize} key={i} onPress={() => onChangeIndex(tab.key)}>
          <TabTitle size={IndicatorSize}>{tab.title}</TabTitle>
          <TabIndicator size={IndicatorSize} color={tab.key === actualRoute ? color : 'transparent'} />
        </TabButton>
      ))}
    </Wrapper>
  );
};

Tabs.propTypes = {
  actualRoute: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  indicatorColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onChangeIndex: PropTypes.func,
};
export default Tabs;
