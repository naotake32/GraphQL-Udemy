const { ApolloServer, gql } = require('apollo-server');

//Define the schema
const typeDefs = gql`
    type Query {
        info: String!
        }
`;

//Resolver function
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});