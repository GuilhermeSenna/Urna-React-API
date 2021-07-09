"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidatesSchema = new Schema({
  nome: {
    type: String,
    required: "Enter candidate's name ",
  },
  numero: {
    type: Number,
    unique: true
  },
});

// essa api vai conter/poder
// apresentar dados como: Status do voto, nome, e numero do candidato

module.exports = mongoose.model("Candidates", CandidatesSchema);
