// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { useQuery, gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://your-wordpress-site.com/graphql",
//   cache: new InMemoryCache(),
// });

// const GET_POSTS = gql`
//   query {
//     posts {
//       nodes {
//         title
//         content
//       }
//     }
//   }
// `;

// const { loading, error, data } = useQuery(GET_POSTS);

// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error: {error.message}</p>;

// return (
//   <div>
//     {data.posts.nodes.map((post) => (
//       <div key={post.title}>
//         <h2>{post.title}</h2>
//         <p>{post.content}</p>
//       </div>
//     ))}
//   </div>
// );