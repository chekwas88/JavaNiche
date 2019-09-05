import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.authLoading();
  }
  authLoading = async () => {
    const userToken = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
