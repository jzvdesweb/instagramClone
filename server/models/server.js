// const express = require("express");
// const cors = require("cors");
// const { dbConnection } = require("../database/config");



// class Server {
//   constructor() {
//     this.index = express();
//     this.port = process.env.PORT;
//     //Rutas
//     // this.usuariosPath = '/api/usuarios';
//     // this.authPath = '/api/auth';

//     // Conectar a base de datos
//     this.conectarDB();


//     // Midlewares
//     this.midlewares();

//     // Rutas de mi aplicación
//     // this.routes();
//   }

//   //Base de Datos
//   async conectarDB() {
//     await dbConnection();
//   }

  

//   midlewares() {

//   //CORS
//   this.index.use(cors({
//     origen : "https://localhots:3000/",
//     credenciales : true
//   }));

//   //Lectura y parseo del body (Cualquier información que venga la va intentar serealizar a un formato json)
//   this.index.use(express.json());

//   //Directorio Público
//   // this.app.use(express.static('public'));
//   }

//   // routes() {
//   //Colocar rutas
//   // this.app.use(this.authPath, require('../routes/auth'));
//   // this.app.use(this.usuariosPath, require('../routes/usuarios'));
//   // }

//   listen() {
//     this.index.listen(this.port, () => {
//       console.log("###############################");
//       console.log("Servidor corriendo en puerto", this.port);
//       console.log("###############################");
//       // console.log(`Servidor Apollo listo en localhost:4000`);
//       // console.log("###############################");
//     });
//   }
// }




// module.exports = Server;
