import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

var app = express();

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});