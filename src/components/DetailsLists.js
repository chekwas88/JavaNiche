import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Details from './Details';

export const GET_JAVA_DEVS = gql`
  query {
    search(query: "location:lagos language:java", type: USER, first: 50) {
      edges {
        node {
          ... on User {
            name
            avatarUrl
            email
            url
            login
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const DetailsList = ({ navigation }) => (
  <Query query={GET_JAVA_DEVS}>
    {({ data, loading, error }) => {
      if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
      }
      if (error) {
        return error;
      }
      const { edges } = data.search;
      return (
        <FlatList
          data={edges}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Details
              fullName={item.node.name}
              avatarUrl={item.node.avatarUrl}
              email={item.node.email}
              reposUrl={item.node.url}
              repos={item.node.repositories.totalCount}
              userName={item.node.login}
              starredRepos={item.node.starredRepositories.totalCount}
              navigation={navigation}
            />
          )}
        />
      );
    }}
  </Query>
);

export default DetailsList;
