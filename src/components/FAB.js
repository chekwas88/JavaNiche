import * as React from 'react';
import { StyleSheet, Share } from 'react-native';
import { FAB } from 'react-native-paper';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
});

class SocialShare extends React.Component {
  onShare = async () => {
    const { userName, profileUrl } = this.props;
    try {
      const result = await Share.share({
        message: `Check out this awesome developer @${userName}, ${profileUrl}`
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return <FAB style={styles.fab} small icon="add" onPress={this.onShare} />;
  }
}
export default SocialShare;
