const axios = require("axios")
class APIHandler {
  // constructor() {
  //   this.axiosApp = axios.create({
  //     baseURL: 'https://datos.madrid.es/'
  //   })
  // }


  getAllInfo() {

    return axios.get("https://datos.madrid.es/egob/catalogo/300261-0-agenda-proximas-carreras.json")
    // .then(res => console.log(res))
    // .catch(err => console.log("es el error de apihandler", err))

  }
}

module.exports = APIHandler