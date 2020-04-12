const Sequelize = require("sequelize/lib/sequelize");

const sequelize = new Sequelize(
  "node-complete",
  "root",
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
