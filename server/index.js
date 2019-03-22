const express = require('express');
const graphqlHTTP = require('express-graphql');
const request = require('request');
const schema = require('./schema/schema');

const credentials = Buffer.from(`${process.env.CLIENTID}:${process.env.CLIENTSECRET}`).toString('base64');
const authStr = `Basic ${credentials}`;

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`I am listening on PORT: ${PORT}`);
});
