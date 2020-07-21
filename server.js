const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const { root } = require('./resolvers');

const app = express();

// initialization
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Graphql server running in port localhost:4000'));
