import React, { Fragment, Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import getGithubToken from '../../github/getGithubToken';
import style from './loginStyle';

class LoginScreen extends Component {
  onPressHandler = async () => {
    try {
      const token = await getGithubToken();
      if (token) {
        AsyncStorage.setItem('token', token);
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      return error;
    }
  };
  render() {
    return (
      <Fragment>
        <View style={style.loginContainer}>
          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={style.loginButton}
              onPress={this.onPressHandler}
            >
              <Ionicons name="logo-github" size={50} color="white" />
              <Text style={style.text}>Get Started with Github</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default LoginScreen;
