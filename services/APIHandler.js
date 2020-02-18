const axios = require("axios")
class APIHandler {

  getAllInfo() {
    return axios.get("https://datos.madrid.es/egob/catalogo/300261-0-agenda-proximas-carreras.json")
  }
}

module.exports = APIHandler