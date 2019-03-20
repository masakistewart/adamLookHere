const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const TrackType = new GraphQLObjectType({
    name: "Track",
    fields: () => ({
        id: GraphQLString,
        name: GraphQLString,
        genres: GraphQLList(GraphQLString)
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        track: {
            type: TrackType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // just playing with the concept
                return {
                    name: "track_name",
                    id: '1234',
                    genres: ['these', 'are', 'genres']
                }
            }
        }
    }
});

