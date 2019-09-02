import { AsyncStorage } from 'react-native';

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value) {
      return value;
    }
  } catch (error) {
    return error;
  }
};
export default getToken;
