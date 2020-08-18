const { authJwt } = require("../middleware");
const controller = require("../controllers/device.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/device",
    [authJwt.verifyToken],
    controller.saveDevice
  );

  app.get(
    "/api/device",
    [authJwt.verifyToken],
    controller.getDevice
  );

  app.put(
    "/api/device",
    [authJwt.verifyToken],
    controller.updateDevice
  );

app.delete(
    "/api/device",
    [authJwt.verifyToken],
    controller.deleteDevice
  );	
};
