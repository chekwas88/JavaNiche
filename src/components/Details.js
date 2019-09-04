import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Details = ({ email, avatarUrl, fullName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.flexLayout}>
        <View>
          <Image style={styles.profileImage} source={{ uri: avatarUrl }} />
        </View>
        <View style={styles.certContainer}>
          <Image
            style={styles.certifyImage}
            source={require('../../assets/certificate.png')}
            tintColor="#E9090D"
          />
        </View>
      </View>
      <View>
        <View style={styles.textCon}>
          <Text style={styles.devName}>{fullName}</Text>
          <Text style={styles.devEmail}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#1D4155',
    height: 150,
    marginHorizontal: 20,
    marginTop: 15,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8
  },
  flexLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 10
  },
  certContainer: {
    marginRight: 0,
    paddingLeft: 0
  },
  certifyImage: {
    height: 50,
    width: 50,
    paddingTop: 0,
    marginTop: -5,
    marginRight: -10
  },
  textCon: {
    padding: 10
  },
  devName: {
    fontSize: 16,
    color: '#fff'
  },
  devEmail: {
    fontSize: 15,
    color: '#e0dbce'
  }
});

export default Details;
