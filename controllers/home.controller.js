/* parte privada */
const path = require("path");

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

/* parte publica */
/* esta es una nuestra clase controladora */
class HomeController {
  index(req, res) {
    return render("home", res);
  }
  about(req, res) {
    return render("about", res);
  }
}

module.exports = new HomeController(); //exportacion para que sea modular
