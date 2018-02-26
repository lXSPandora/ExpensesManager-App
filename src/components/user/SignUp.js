// @flow
import * as React from 'react';
import { ScrollView, Dimensions, Platform, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GradientBackground from '../../elements/GradientBackground';
import NextFloatingButton from '../../elements/NextFloatingButton';
import Input from '../../elements/Input';
import HeaderLogin from '../../elements/HeaderLogin';
import styled from 'styled-components/native';
import Snackbar from 'react-native-snackbar';
import { SafeArea } from '../common/utils';

const { width } = Dimensions.get('window');

const InputWrapper = styled.View`
  margin-top: 50;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InputWidth = width - 30;

class SignUp extends React.Component {
  state = {
    fullName: null,
    email: null,
    password: null,
    confirm: null,
    companyName: null,
    companyIndustry: null,
    error: false,
  };
  static navigationOptions = {
    header: null,
  };

  showError = message => {
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

  signUp = () => {
    const {
      fullName,
      email,
      password,
      confirm,
      companyName,
      companyIndustry,
    } = this.state;

    if (
      !fullName ||
      !email ||
      !password ||
      !confirm ||
      !companyName ||
      !companyIndustry
    ) {
      this.showError('Please fill all the fields');
    }
    if (password !== confirm) {
      this.showError('Password and Confirm password must be the equal');
    }
  };

  render() {
    const {
      fullName,
      email,
      password,
      confirm,
      companyName,
      companyIndustry,
      error,
    } = this.state;
    return (
      <GradientBackground
        error={error}
        style={{
          flex: 1,
        }}
      >
        <SafeArea />
        <StatusBar
          backgroundColor={error ? '#F90000' : '#0090FF'}
          barStyle="light-content"
        />
        <HeaderLogin
          title="Sign Up"
          backAction={() => this.props.navigation.pop()}
        />
        <KeyboardAwareScrollView
          style={{
            flex: 1,
          }}
        >
          <InputWrapper>
            <Input
              label="Full Name"
              textColor="#fff"
              width={InputWidth}
              value={fullName}
              onChangeText={fullName => this.setState({ fullName })}
            />
            <Input
              label="Email"
              textColor="#fff"
              width={InputWidth}
              value={email}
              onChangeText={email => this.setState({ email })}
            />
            <Input
              label="Password"
              textColor="#fff"
              width={InputWidth}
              value={password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
            />
            <Input
              label="Confirm Password"
              textColor="#fff"
              width={InputWidth}
              value={confirm}
              onChangeText={confirm => this.setState({ confirm })}
              secureTextEntry={true}
            />
          </InputWrapper>
        </KeyboardAwareScrollView>
        <NextFloatingButton
          color="white"
          iconColor={error ? 'red' : '#2EDAD0'}
          onPress={this.signUp}
        />
      </GradientBackground>
    );
  }
}
export default SignUp;
