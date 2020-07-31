window.onload = () => {
  try {
    document.querySelector("#form-quotes").addEventListener("submit", (e) => {
      e.preventDefault();
      axios
        .post("/quotes", {
          author: e.target[0].value,
          photo: e.target[1].value,
          message: e.target[2].value,
        })
        .then((response) => {
          // Respuesta del servidor
          console.log(response);
          window.location.href = "/quotes";
        })
        .catch((e) => {
          console.log(e);
        });
    });
  } catch (error) {}
  
};
