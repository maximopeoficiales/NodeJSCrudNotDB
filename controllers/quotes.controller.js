const path = require("path");
const DB_PATH = path.join(__dirname + `/../data/db.json`);
let db = require(DB_PATH);
const fs = require("fs");
const { send } = require("process");

/* parte privada */
function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}
class QuotesController {
  index(req, res) {
    return render("quotes", res);
  }
  /* obtencion de datos */
  get(req, res) {
    return res.send(db);
  }
  /* vista de add_quotes */
  add_quotes(req, res) {
    return render("add_quotes", res);
  }
  /* agregado */
  add(req, res) {
    const { body: quote } = req; //obtengo  lo que se envia por post
    /*     console.log(quote); */
    const lasQuote = db[db.length - 1]; //obtengo el ultimo registro
    const { id } = lasQuote; //id
    quote.id = id + 1; //simulacion de ultimo id
    db.push(quote); //se agrega el nuevo registro al db
    fs.writeFileSync(DB_PATH, JSON.stringify(db)); //se escribe en el archivo
    return res.status(201).send(); //se envio un estido de creacio completa
  }

  /* admin de citas */
  admin_quotes(req, res) {
    return render("admin_quotes", res);
  }
  delete(req, res) {
    const { body: quote } = req; //obtengo  lo que se envia por post
    let { id } = quote;
    db.splice(id, 1); //se agrega el nuevo registro al db
    fs.writeFileSync(DB_PATH, JSON.stringify(db)); //se escribe en el archivo
    return res.status(200).send(); //se envio un estido de creacio completa
  }
}
module.exports = new QuotesController();
