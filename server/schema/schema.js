const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLID } = graphql;

const artistArr = [
    { id: '1', name: 'noisia' },
    { id: '2', name: 'chase and status' },
    { id: '3', name: 'deadmau5' }
];


const tracksArr = [
    { id: '1', name: 'this could be', artist: 'noisia', artistId: '1' },
    { id: '2', name: 'no problem', artist: 'chase and status', artistId: '2'},
    { id: '3', name: 'ghosts n stuff', artist: 'deadmau5', artistId: '3'},
    { id: '4', name: 'tommies song', artist: 'noisia', artistId: '1' }
];

const ArtistType = new GraphQLObjectType({
    name: 'Artist',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        tracks: {
            type: GraphQLList(TrackType),
            resolve(parent) {
                return tracksArr.filter(track => {
                    console.log(track, parent)
                    return track.artistId === parent.id
                })
            }
        }
    })
})

const findById = (id, array) => {
    return array.filter(item => item.id === id)[0];
}

const TrackType = new GraphQLObjectType({
    name: "Track",
    description: 'the skjbgdksbg',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        artist: { type: GraphQLString },
        artistId:  {type: GraphQLID },
        artist: {
            type: ArtistType,
            resolve(parent, args) {
                return findById(parent.artistId, artistArr)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        track: {
            type: TrackType,
            args: { id: { type: GraphQLID } },
            resolve: (_, args) => new Promise(resolve => {
                const track = findById(args.id, tracksArr);
                resolve(track);
            })
        },
        artist: {
            type: ArtistType,
            args: {id: {type: GraphQLID} },
            resolve: (_, args) => new Promise(resolve => {
                const artist = findById(args.id, artistArr);
                resolve(artist);
            })
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

