"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidatesSchema = new Schema({
  name: {
    type: String,
    required: "Enter candidate's name ",
  },
  NumCandidate: {
    Type: Number,
    min: 18,
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
});

// essa api vai conter/poder
// apresentar dados como: Status do voto, nome, e numero do candidato

module.exports = mongoose.model("Candidates", CandidatesSchema);
