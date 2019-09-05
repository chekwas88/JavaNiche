/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RepoDetails = ({repos, starredRepos}) => {
  return (
    <View style={styles.repoContainer}>
      <View style={styles.repoChildren}>
        <Text style={styles.repoTextBold}>
          Repo:  <Text style={styles.repoTextFaint}>{repos}</Text>
        </Text>
        <Text style={styles.repoTextBold}>
          StarredRepos:  <Text style={styles.repoTextFaint}>{starredRepos}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  repoContainer: {
    width: '100%',
    height: 30,
    marginTop: '10%'
  },
  repoChildren: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  repoTextBold: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  repoTextFaint: {
    fontSize: 14,
    color: '#8492A6'
  }
});

export default RepoDetails;
