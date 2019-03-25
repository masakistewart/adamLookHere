const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
const morgan = require('morgan');

// Create token refresh function
app.use(cors());
app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`I am listening on PORT: ${PORT}`);
});
