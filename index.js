const express = require("express"); //requiero a express
const server = express(); //instancia de Express
const { PORT } = require("./config"); //varaibles, del config
const bodyParser = require("body-parser");
const { HomeRoutes, QuotesRoutes } = require("./routes"); //traigo las rutas
const { NotFoundMiddleware } = require("./Middlewares"); //obtengo mi middleware
/* agregar middelware */
server.use(express.static("./public")); //especifico mi carpeta base

// habilitar el body-parser
/* body parser  extrae toda la parte del cuerpo de una secuencia de 
solicitud entrante y la expone en req.body. nos facilita su uso */
server.use(bodyParser.json()); //admite el análisis de datos de publicación de tipo json
server.use(bodyParser.urlencoded({ extended: true })); //admite el análisis de datos de publicación  x-www-form-urlencoded

/* usamos nuestro middleware */
server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto : ${PORT}`);
});
