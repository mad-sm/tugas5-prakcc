import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("asisten-tcc-api", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
