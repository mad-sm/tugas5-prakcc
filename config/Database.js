import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc-2", "root", "", {
  host: "35.222.95.210",
  dialect: "mysql",
});

export default db;
