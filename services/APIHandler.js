const axios = require("axios")
class APIHandler {

  getAllInfo() {
    return axios.get("https://datos.madrid.es/egob/catalogo/300261-0-agenda-proximas-carreras.json")
  }
  getAllPolis() {
    return axios.get('https://datos.madrid.es/egob/catalogo/200186-0-polideportivos.json')
  }
}

module.exports = APIHandler