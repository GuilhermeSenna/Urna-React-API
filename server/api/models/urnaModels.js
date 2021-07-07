"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidatesSchema = new Schema({
  name: {
    type: String,
    required: "Enter candidate's name ",
  },
  NumCandidate: {
    type: Number,
    unique: true
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
  teste: {
    type: String,
  },
});

// essa api vai conter/poder
// apresentar dados como: Status do voto, nome, e numero do candidato

module.exports = mongoose.model("Candidates", CandidatesSchema);
