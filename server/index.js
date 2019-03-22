const express = require('express');
const graphqlHTTP = require('express-graphql');
const request = require('request');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`I am listening on PORT: ${PORT}`);
});
