import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
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
//import HomeScreen from './src/screen/Home';
import AuthLoadingScreen from './src/screens/AuthLoading';

//const AppStack = createStackNavigator({ Home: HomeScreen });
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
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
class App extends Component {
  getAsyncToken = async () => await getToken();
  state = {
    token: null
  };
  async componentDidMount() {
    const token = await getToken();
    this.setState({ token });
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

    return (
      <ApolloProvider client={apolloClient}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

export default App;
