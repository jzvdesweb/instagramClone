// const mongoose = require("mongoose");

// const { ApolloServer } = require('apollo-server-express');
// const typeDefs = require('../gql/schema');
// const resolvers = require('../gql/resolvers');

// const express = require('express');
// const {
//   graphqlUploadExpress, // A Koa implementation is also exported.
// } = require('graphql-upload');


// // Configuarción mongoose
// mongoose.connect(process.env.MONGODB_CNN);

// try {
//   console.log("Base de datos online");
// } catch (error) {
//   console.log(error);
//   throw new Error("Error al iniciar la base de datos");
// }









// // Configuración Apollo y graphql
// const dbConnection = async () => {


//   const serverApollo = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//  await serverApollo.start();

//  const app = express();

//  // This middleware should be added before calling `applyMiddleware`.
//  app.use(graphqlUploadExpress());

//  serverApollo.applyMiddleware({ app });

//   await new Promise<void>(r => app.listen({ port: 4000 }, r));
 
//  console.log(`🚀 Server ready at http://localhost:4000${serverApollo.graphqlPath}`);

// }



// module.exports = {
//   dbConnection,
// }
