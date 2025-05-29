const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

// Initialize counter state
let counter = 0;

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    getCounter: Int!
  }

  type Mutation {
    incrementCounter: Int!
    decrementCounter: Int!
    setCounter(value: Int!): Int!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    getCounter: () => counter,
  },
  Mutation: {
    incrementCounter: () => {
      counter++;
      saveCounter();
      return counter;
    },
    decrementCounter: () => {
      counter--;
      saveCounter();
      return counter;
    },
    setCounter: (_, { value }) => {
      counter = value;
      saveCounter();
      return counter;
    },
  },
};

// Function to save counter to file (for persistence)
function saveCounter() {
  fs.writeFileSync("counter.json", JSON.stringify({ counter }));
}

// Function to load counter from file
function loadCounter() {
  try {
    if (fs.existsSync("counter.json")) {
      const data = fs.readFileSync("counter.json");
      const json = JSON.parse(data);
      counter = json.counter || 0;
    }
  } catch (error) {
    console.error("Error loading counter:", error);
  }
}

// Load counter on startup
loadCounter();

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"], // Allow React, GraphiQL, and Apollo Studio
    credentials: true, // Required for Apollo Studio with authentication
  },
});

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
