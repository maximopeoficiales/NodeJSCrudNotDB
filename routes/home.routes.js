const router = require("express").Router(); //crear manejadores de rutas montables y modulares.
const { HomeController } = require("../controllers");
/* aqui estarian todas las rutas de este controller */

router.get("/", HomeController.index); /* si entra / ejecuta el metodo */
router.get("/about", HomeController.about); /* si entra / ejecuta el metodo */

module.exports = router; /* exporta las rutas */
