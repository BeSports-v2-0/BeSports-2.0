class APIHandler {
  constructor() {

    this.axiosApp = axios.create({
      baseURL: 'https://datos.madrid.es/'
    })
  }

  getAllInfo() {
    return this.axiosApp.get("egob/catalogo/300261-0-agenda-proximas-carreras.json")
      .then()

  }

}
