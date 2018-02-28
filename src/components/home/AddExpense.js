// @flow
import * as React from 'react';
import { Dimensions, Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import NextFloatingButton from '../../elements/NextFloatingButton';
import Input from '../../elements/Input';
import IconButton from '../../elements/IconButton';
import Button from '../../elements/Button';
import CreditCardIcon from '../../elements/svg/CreditCardIcon';
import WaterIcon from '../../elements/svg/WaterIcon';
import LightIcon from '../../elements/svg/LightIcon';
import GasIcon from '../../elements/svg/GasIcon';
import HeaderLogin from '../../elements/HeaderLogin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import Snackbar from 'react-native-snackbar';
import { SafeArea, LOGO_HELPER } from '../common/utils';
import Icon from '../../elements/Icon';

const { width } = Dimensions.get('window');

const LabelsSize = width - 40;

const StyledButton = styled(Button)`
  width: ${props => props.width};
  border-width: 2;
  border-color: ${props => props.border};
`;

const InputWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 40;
`;

const SelectLabelContainer = styled.View`
  width: ${LabelsSize};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-vertical: 10;
`;

const InputLabel = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: white;
  margin-top: 10;
  text-align: left;
  width: ${LabelsSize};
  padding-left: 10;
`;

const statusValues = {
  PAID: 'PAID',
  NOT_PAID: 'NOT_PAID',
};

const typeValues = {
  CREDIT_CARD: 'CREDIT_CARD',
  LIGHT: 'LIGHT',
  GAS: 'GAS',
  WATER: 'WATER',
  BILL: 'BILL',
};

const InputWidth = width - 40;

class AddExpense extends React.Component {
  state = {
    title: null,
    value: null,
    status: null,
    type: null,
    date: null,
    error: false,
  };
  static navigationOptions = {
    header: null,
  };

  showMessage = message => {
    this.setState({
      error: true,
    });
    setTimeout(() => {
      this.setState({
        error: false,
      });
    }, 3000);
    return Snackbar.show({
      title: message,
      duration: Snackbar.LENGTH_LONG,
      action: {
        title: 'OK',
        color: 'red',
        onPress: () => {
          this.setState({
            error: false,
          });
        },
      },
    });
  };

  setStatus = (status: string) => {
    this.setState({
      status,
    });
  };

  setType = (type: string) => {
    this.setState({
      type,
    });
  };

  login = () => {
    const { email, password } = this.state;

    if (email === null || password === null) {
      return this.showMessage('Please fill all the fields');
    }
    this.props.navigation.goBack();
  };

  render() {
    const { title, value, status, type, error } = this.state;
    return (
      <GradientBackground
        style={{
          flex: 1,
        }}
        error={error}
      >
        <StatusBar backgroundColor={error ? '#F90000' : '#00C5F9'} barStyle="light-content" />
        <SafeArea />
        <HeaderLogin
          title="Add a new Expense"
          backAction={() => this.props.navigation.pop()}
          logo={LOGO_HELPER.CLOSE}
        />
        <KeyboardAwareScrollView
          style={{
            flex: 1,
          }}
        >
          <InputWrapper>
            <Input
              label="Title"
              textColor="#fff"
              value={title}
              onChangeText={title => this.setState({ title })}
              width={InputWidth}
            />
            <Input
              label="Value"
              textColor="#fff"
              value={value}
              onChangeText={value => this.setState({ value })}
              width={InputWidth}
              keyboardType="numeric"
            />
            <InputLabel>Type of Expense</InputLabel>
            <SelectLabelContainer>
              <IconButton
                onPress={() => this.setType(typeValues.CREDIT_CARD)}
                border={type === typeValues.CREDIT_CARD ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                backgroundColor="rgba(216, 216, 216, 0.6)"
              >
                <CreditCardIcon size={30} color="white" />
              </IconButton>
              <IconButton
                onPress={() => this.setType(typeValues.LIGHT)}
                border={type === typeValues.LIGHT ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                backgroundColor="rgba(216, 216, 216, 0.6)"
              >
                <LightIcon size={30} color="white" />
              </IconButton>
              <IconButton
                onPress={() => this.setType(typeValues.GAS)}
                border={type === typeValues.GAS ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                backgroundColor="rgba(216, 216, 216, 0.6)"
              >
                <GasIcon size={30} color="white" />
              </IconButton>
              <IconButton
                onPress={() => this.setType(typeValues.WATER)}
                border={type === typeValues.WATER ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                backgroundColor="rgba(216, 216, 216, 0.6)"
              >
                <WaterIcon size={30} color="white" />
              </IconButton>
              <IconButton
                onPress={() => this.setType(typeValues.BILL)}
                border={type === typeValues.BILL ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                backgroundColor="rgba(216, 216, 216, 0.6)"
              >
                <Icon width={30} height={31} icon={LOGO_HELPER.BILL} color="white" />
              </IconButton>
            </SelectLabelContainer>
            <InputLabel>Expense Status</InputLabel>
            <SelectLabelContainer>
              <StyledButton
                color="rgba(216, 216, 216, 0.6)"
                textColor="white"
                border={status === statusValues.NOT_PAID ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                width={InputWidth / 2 - 10}
                title="Not Paid"
                onPress={() => this.setStatus(statusValues.NOT_PAID)}
              />
              <StyledButton
                color="rgba(216, 216, 216, 0.6)"
                textColor="white"
                border={status === statusValues.PAID ? 'white' : 'rgba(216, 216, 216, 0.6)'}
                width={InputWidth / 2 - 10}
                title="Paid"
                onPress={() => this.setStatus(statusValues.PAID)}
              />
            </SelectLabelContainer>
          </InputWrapper>
        </KeyboardAwareScrollView>
        <NextFloatingButton
          color="white"
          iconColor={error ? 'red' : '#2EDAD0'}
          onPress={this.login}
          logo={LOGO_HELPER.ADD}
        />
        {Platform.OS === 'ios' && <KeyboardAvoidingView />}
      </GradientBackground>
    );
  }
}
export default AddExpense;
