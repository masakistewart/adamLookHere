const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLID } = graphql;

const TrackType = new GraphQLObjectType({
    name: "Track",
    description: 'the skjbgdksbg',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genres: { type: GraphQLList(GraphQLString) },
        artist: { type: GraphQLString }
    })
});

const tracksArr = [
    { id: '1', name: 'track1', genres: ['house', 'DnB', 'dubstep'], artist: 'artist1' },
    { id: '2', name: 'track2', genres: ['rap', 'progressive', 'alternative'], artist: 'artist2' },
    { id: '3', name: 'track3', genres: ['alternative'], artist: 'artist3' }
];

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        track: {
            type: TrackType,
            args: { id: { type: GraphQLID } },
            resolve: (_, args) => new Promise(resolve => {
                const [track] = tracksArr.filter(track => {
                    return track.id === args.id
                })
                resolve(track)
            })
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

