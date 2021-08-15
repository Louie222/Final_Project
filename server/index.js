const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const URL = "mongodb+srv://Louie222:Fullstack_2021@cluster0.7lrug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 

mongoose.connect(
    URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => console.log("DB CONNECTED")
  );
  
  const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(3000, () => console.log("Server 3000 up & running"));
  };
  startServer();