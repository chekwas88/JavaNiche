import React from 'react';
import { WebView } from 'react-native-webview';

const RepoView = ({
  navigation: {
    state: { params: { reposLink } = {} }
  }
}) => <WebView source={{ uri: reposLink }} startInLoadingState />;

export default RepoView;
