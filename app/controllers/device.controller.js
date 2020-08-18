const db = require("../models");
const config = require("../config/auth.config");
const Device = db.device;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.saveDevice = (req, res) => {
  // Save User to Database
  Device.create({
	userId: req.body.userId,
    name: req.body.name,
	devType: req.body.devType,
    currentState: req.body.currentState
  })
    .then(device => {
      res.send({ message: "Device added successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDevice = (req, res) => {
  Device.find({
    where: {
      userId: req.body.userId
    }
  })
    .then(device => {
      if (!device) {
        return res.status(404).send({ message: "device Not found." });
      }

     
      res.status(200).send(device);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateDevice = (req, res) => {
  Device.find({ where: { id: req.param.id } })
  .on('success', function (project) {
    // Check if record exists in db
    if (project) {
      project.update({
        name: req.param.name,
		currentState: req.param.currentState,
      }  { where: { _id: req.param.id } })
      .success(function () {
		 res.status(200).send(project);

	  })
    }
  })
}


