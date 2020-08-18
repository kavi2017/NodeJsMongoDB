module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define("devices", {
	userId:{
	type: Sequelize.INTEGER,
	},  
    name: {
      type: Sequelize.STRING,
    },
    devType: {
      type: Sequelize.STRING,
    },
	currentState: {
      type: Sequelize.BOOLEAN
    }
  });

  return Device;
};
