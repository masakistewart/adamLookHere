const express = require('express');
const graphqlHTTP = require('express-graphql');


const app = express();
const PORT = process.env.PORT || 8080;

app.use('/graphql', graphqlHTTP({

}));

app.listen(PORT, () => {
    console.log(`I am listening on PORT: ${PORT}`);
});
