import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import LoweriOSAdaption from '../../elements/LoweriOSAdaption';

export const iosVersion = parseInt(Platform.Version, 10);

export const SafeArea = () => {
  if (iosVersion < 11) {
    return <LoweriOSAdaption />;
  }
  return <SafeAreaView />;
};

export const LOGO_HELPER = {
  BACK_ICON: require('../../assets/backicon.png'),
  BILL: require('../../assets/bill.png'),
  ARROW: require('../../assets/move-to-next.png'),
  GAS: require('../../assets/gas.png'),
  LIGHT: require('../../assets/light.png'),
  WATER: require('../../assets/water.png'),
  CREDIT_CARD: require('../../assets/creditcard.png'),
  ADD: require('../../assets/add.png'),
};
