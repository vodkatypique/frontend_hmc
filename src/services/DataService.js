import http from "../http-common";

class DataService {
  getAll(page) {
    return http.get("/players/?page="+page);
  }

  getAllClubs(page) {
    return http.get("/clubs/?page="+page);
  }

  getAllTactics(page) {
    return http.get("/tactic/?page="+page);
  }

  getAllFormations(page) {
    return http.get("/formations/?page="+page);
  }

  getFormation(idu) {
    return http.get("/formations/"+idu);
  }

  getTactic(idu) {
    return http.get("/tactic/"+idu);
  }

  getAllRoles(page) {
    return http.get("/roles/?page="+page);
  }

  patchCompo(idClub, compo) {
      let img = new Image(100, 200);
      console.log(
          img
      );
    return http.patch(
        "/clubs/" + idClub + "/",
        {
          compo: compo.toString(),
          edited_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        },
        {headers: {'Content-Type': 'application/json'}})
  }
  patchFormation(idClub, iduFormation) {
    return http.patch(
        "/clubs/" + idClub + "/",
        {
          compo: "[]",
          formation: iduFormation,
          edited_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {headers: {'Content-Type': 'application/json'}})
  }
  patchDate(idClub) {
    return http.patch(
        "/clubs/" + idClub + "/",
        {
          edited_at: null,
        },
        {headers: {'Content-Type': 'application/json'}})
  }

   patchScreenClub(idClub, screen) {
    return http.patch(
        "/clubs/" + idClub + "/",
        {
          screenclub: screen,
        },
        {headers: {'Content-Type': 'image/png'}})
  }

  patchTactique(idClub, iduTactique) {
    return http.patch(
        "/clubs/" + idClub + "/",
        {
          consign: iduTactique,
          edited_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {headers: {'Content-Type': 'application/json'}})
  }

  login(url, payload){
    return http.post(
        url,
        {
          username: payload['username'],
          password: payload['password']
        },
        {headers: {'Content-Type': 'application/json'}}
    )
  }


  get(idu) {
    return http.get(`/players/${idu}`);
  }


  create(data) {
    return http.post("/players", data);
  }

  update(idu, data) {
    return http.put(`/players/${idu}`, data);
  }

  delete(idu) {
    return http.delete(`/players/${idu}`);
  }

  deleteAll() {
    return http.delete(`/players`);
  }

}

export default new DataService();