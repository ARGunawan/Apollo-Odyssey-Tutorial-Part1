const { gql } = require('apollo-server');

const typeDefs = gql`

"This query serves as an entry point in gaining access the tracks and what our clients can query"
type Query{
    "Query to obtain tracks from the homepage!"
    tracksForHome:[Track!]
}

"A track is a specific module that teaches about a specific topic"
type Track{
    id: ID!
    "the track's title"
    title: String!
    "the track's author"
    author: Author!
    "the track's thumbnail/main illustration that will be displayed"
    thumbnail: String
    "the track's length to complete in minutes"
    length: Int
    "the number of modules it contains"
    modulesCount: Int
}

"Author of a complete track"
type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "The author's photo url"
    photo: String
}

`;

module.exports = typeDefs;