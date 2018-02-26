// @flow
import * as React from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import GradientBackground from '../../elements/GradientBackground';
import NextFloatingButton from '../../elements/NextFloatingButton';
import Input from '../../elements/Input';
import HeaderLogin from '../../elements/HeaderLogin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import Snackbar from 'react-native-snackbar';
import { SafeArea, LOGO_HELPER } from '../common/utils';

const { width } = Dimensions.get('window');

const InputWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 80;
`;

const InputWidth = width - 40;

class AddExpense extends React.Component {
  state = {
    title: null,
    value: null,
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

  login = () => {
    const { email, password } = this.state;

    if (email === null || password === null) {
      return this.showMessage('Please fill all the fields');
    }
    this.props.navigation.goBack();
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <GradientBackground
        style={{
          flex: 1,
        }}
        error={error}
      >
        <StatusBar
          backgroundColor={error ? '#F90000' : '#00C5F9'}
          barStyle="light-content"
        />
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
              value={email}
              onChangeText={email => this.setState({ email })}
              width={InputWidth}
            />
            <Input
              label="Value"
              textColor="#fff"
              value={password}
              onChangeText={password => this.setState({ password })}
              width={InputWidth}
              secureTextEntry={true}
            />
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
