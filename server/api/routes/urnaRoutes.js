"use strict";

module.exports = (app) => {
  const CandidatesList = require("../controllers/urnaController");

  //rotas
  app
    .route("/candidates")
    .get(CandidatesList.list_all_candidates)
    .post(CandidatesList.create_a_candidate);

  app
    .route("/candidates/:candidatesId")
    .get(CandidatesList.about_a_candidate)
    //fica a critério uma rota para criação do readme
    // do candidato
    .put(CandidatesList.update_a_candidate)
    .delete(CandidatesList.delete_a_candidate);
};
