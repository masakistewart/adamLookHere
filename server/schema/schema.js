const graphql = require('graphql');
const Spotify = require('../requests/Spotify');
const { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLInt ,GraphQLList, GraphQLSchema, GraphQLID } = graphql;

const ArtistType = new GraphQLObjectType({
    name: "ArtistType",
    description: "an artist object",
    fields: () => ({
        id: {type: GraphQLID},
        href: {type: GraphQLString},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        uri: {type: GraphQLString}
    })
})

const TrackType = new GraphQLObjectType({
    name: "Track",
    description: 'A track object',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        artists: { type: GraphQLList(ArtistType) },
        available_markets: {type: GraphQLList(GraphQLString)},
        disc_number: {type: GraphQLInt},
        duration_ms: {type: GraphQLInt},
        explicit: {type: GraphQLBoolean},
        href: {type: GraphQLString},
        is_local: {type: GraphQLBoolean},
        popularity: {type: GraphQLInt},
        preview_url: {type: GraphQLString},
        track_number: {type: GraphQLInt},
        type: {type: GraphQLString},
        uri: {type: GraphQLString}
    })
});

const TracksType = new GraphQLObjectType({
    name: 'Tracks',
    description: 'An Array of Tracks',
    fields: () => ({
        href: {type: GraphQLString},
        items: { type: GraphQLList(TrackType) }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tracks: {
            type: TracksType,
            args: { searchTerm: { type: GraphQLString }, searchType: { type: GraphQLList(GraphQLString) } },
            resolve: (_, args) => Spotify.find(args.searchTerm, args.searchType)
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

