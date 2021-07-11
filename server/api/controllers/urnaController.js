"use strict";

const mongoose = require("mongoose"),
  Candidate = mongoose.model("Candidates");

exports.list_all_candidates = (req, res) => {
  Candidate.find({}, (err, candidate) => {
    if (err) res.send(err);
    res.json(candidate);
  });
};

exports.create_a_candidate = (req, res) => {
  console.log(req.body)
  let new_candidate = new Candidate(req.body);
  new_candidate.save((err, candidate) => {
    if (err) res.send(err);
    res.json(candidate);
  });
};
exports.update_a_candidate = (req, res) => {
  Candidate.findOneAndUpdate(
    { _id: req.params.candidatesId },
    req.body,
    { new: true },
    (err, candidate) => {
      if (err) res.send(err);
      res.json(candidate);
    }
  );
};
exports.about_a_candidate = (req, res) => {
  Candidate.findById(req.params.candidatesId, (err, candidate) => {
    if (err) res.send(err);
    res.json(candidate);
  });
};

exports.delete_a_candidate = (req, res) => {
  Candidate.remove(
    {
      _id: req.params.candidatesId,
    },
    (err, candidate) => {
      if (err) res.send(err);
      res.json({ message: "Candidate successfully deleted" });
    }
  );
};
