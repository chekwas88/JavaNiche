import React, { Component } from 'react';
import { View, Text } from 'react-native';
import profileScreenStyle from './profileStyle';
import ProfileUpper from '../../components/ProfileUpper';
import RepoDetails from '../../components/RepoDetails';
import RepoButton from '../../components/RepoButton';
import SocialShare from '../../components/FAB';

class ProfileScreen extends Component {
  render() {
    const {
      navigation: {
        navigate,
        state: {
          params: {
            email,
            fullName,
            userName,
            avatarUrl,
            repos,
            starredRepos,
            reposUrl
          } = {}
        }
      }
    } = this.props;
    return (
      <View style={profileScreenStyle.profileContainer}>
        <ProfileUpper avatar={avatarUrl} />
        <View style={profileScreenStyle.nameContainer}>
          <Text style={profileScreenStyle.nameText}>{fullName}</Text>
          <Text style={profileScreenStyle.emailText}>Email: {email}</Text>
          <RepoDetails repos={repos} starredRepos={starredRepos} />
          <RepoButton navigate={navigate} reposLink={reposUrl} />
        </View>
        <SocialShare profileUrl={reposUrl} userName={userName} />
      </View>
    );
  }
}
export default ProfileScreen;
