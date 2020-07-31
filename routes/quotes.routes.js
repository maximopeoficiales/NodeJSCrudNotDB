const router = require("express").Router(); //crear manejadores de rutas montables y modulares.
const { QuoteController } = require("../controllers");
/* aqui estarian todas las rutas de este controller */

router.get("/quotes", QuoteController.index); /* si entra / ejecuta el metodo */
router.get("/quotes/all", QuoteController.get); /* si entra / ejecuta el metodo */
router.get("/add_quotes", QuoteController.add_quotes); /* si entra / ejecuta el metodo */
router.get("/admin_quotes", QuoteController.admin_quotes); /* si entra / ejecuta el metodo */
router.post("/quotes", QuoteController.add); /* si entra / ejecuta el metodo */
router.post("/quotes_d", QuoteController.delete); /* si entra / ejecuta el metodo */

module.exports = router; /* exporta las rutas */
