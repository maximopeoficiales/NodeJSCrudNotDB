window.onload = () => {
  async function llenarTabla() {
    let tabla = document.querySelector("#admin_table tbody");
    const quotes = (await axios.get("/quotes/all")).data;
    let template = "";
    quotes.forEach((quote) => {
      template += `
                 <tr>
                      <td scope="row">${quote.author}</td>
                      <td>${quote.message}</td>
                      <td>
                           <img src="${quote.photo}" alt="${quote.author}" class="img-fluid" height="80px" width="80px"/>
                      </td>
                      <td>
                           <button class="btn btn-danger" data-id="${quote.id}">Eliminar</button>
                      </td>
                 </tr>
            `;
    });

    tabla.innerHTML = template;
  }
  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.type == "submit") {
      let id = e.target.getAttribute("data-id");
      axios
        .post("/quotes_d", {
          id,
        })
        .then((response) => {
          // Respuesta del servidor
          console.log(response);
          window.location.href = "/quotes";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });
  llenarTabla();
};
