const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Person{
    id: ID!
    name: String!
    age: Int
    shark: String
  }
  
  type Query {
    user(id: ID!): Person!
    users(shark: String): [Person]! 
  }
`);

module.exports = schema;
