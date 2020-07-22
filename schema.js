const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Person{
    id: Int!
    name: String!
    age: Int
    shark: String
  }
  
  type Query {
    user(id: Int!): Person
    users(shark: String): [Person]! 
  }

  type Mutation {
    updateUser(id: Int!, name: String!, age: String): Person
  }
`);

module.exports = schema;
