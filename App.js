import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Text } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import getToken from './src/util/getToken';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import AuthLoadingScreen from './src/screens/AuthLoading';
import WebviewScreen from './src/screens/WebView';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  },
  Webview: {
    screen: WebviewScreen,
    navigationOptions: {
      header: null
    }
  }
});
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
class App extends Component {
  state = {
    token: null
  };
  async componentWillMount() {
    const token = await getToken();
    this.setState({
      token
    });
  }
  render() {
    const apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${this.state.token}`
        }
      }),
      cache: new InMemoryCache()
    });
    if (!this.state.token) {
      return <Text>Loading...</Text>;
    }
    return (
      <ApolloProvider client={apolloClient}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

export default App;
