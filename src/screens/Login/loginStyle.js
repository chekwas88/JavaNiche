import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#1A3849',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#1D4155',
    padding: 10,
    width: '80%',
    height: '10%',
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: -38
  }
});

export default style;
