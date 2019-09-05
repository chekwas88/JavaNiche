import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfileUpper = ({ avatar }) => {
  return (
    <View style={styles.upperContainer}>
      <Image style={styles.profileImage} source={{ uri: avatar }} />
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: '#426474'
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    position: 'absolute',
    top: '80%',
    left: '40%'
  }
});

export default ProfileUpper;
