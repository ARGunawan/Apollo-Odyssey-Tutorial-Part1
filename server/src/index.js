const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

//Instead of a boolena we can instead pass the mock data in an object to mimic real data
const mocks = {
    Query: () => ({
    tracksForHome: () => [...new Array(6)],
     }),
    Track: () => ({
      id: () => 'track_01',
      title: () => 'Astro Kitty, Space Explorer',
      author: () => {
        return {
          name: 'Grumpy Cat',
          photo:
            'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
        };
      },
      thumbnail: () =>
        'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
      length: () => 1210,
      modulesCount: () => 6
    })
  };

//We pass boolean to mock to populate our apollo server with mock data
const server = new ApolloServer({ typeDefs, mocks,});

server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
  });

  