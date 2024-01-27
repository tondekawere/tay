import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost/wordpress/wp-admin/index.php.com/graphql", // Replace with your WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});
