import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'https://fun-gobbler-22.hasura.app/v1/graphql', // Replace with your Hasura GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  const token = 'wTF4eH50ifYMT1H6NAiFnlEZ5ZxoBSzKVE5lJXdW1XvZH6eQraN5rvyC5wG1uLOB';

  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
