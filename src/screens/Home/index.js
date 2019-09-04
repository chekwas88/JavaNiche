import React, { Component } from 'react';
import { ScrollView, Button, AsyncStorage } from 'react-native';
import homeScreenStyle from './homeStyle';
import DevLists from '../../components/DetailsLists';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Lagos Java Developers',
    headerStyle: {
      backgroundColor: '#1A3849'
    },
    headerRight: (
      <Button onPress={this.logOutAsync} title="sign me out" color="#1D4155" />
    ),
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  logOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={homeScreenStyle.homeContainer}>
        <DevLists navigation={navigation} />
      </ScrollView>
    );
  }
}
export default HomeScreen;
