const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// schema
const schema = buildSchema(`
type Query {
  hello: String
}
`);

// root resolver
const root = {
  hello: () => 'Hello world',
};

const app = express();

// initialization
app.use(
  'graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Graphql server running in port localhost:4000'));
