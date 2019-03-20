const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

const TrackType = new GraphQLObjectType({
    name: "Track",
    fields: () => ({
        id: GraphQLString,
        name: GraphQLString,
        genres: GraphQLList(GraphQLString)
    })
});

const tracksArr = [
    {id: '1', name:'track1', genres: ['house', 'DnB', 'dubstep']},
    {id: '2', name:'track2', genres: ['rap', 'progressive', 'alternative']},
    {id: '3', name:'track3', genres: ['alternative']}
];

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        track: {
            type: TrackType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // just playing with the concept
                
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

