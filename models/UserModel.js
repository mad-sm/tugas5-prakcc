import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// Membuat tabel "user"
const User = db.define(
  "user", // Nama Tabel
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  }
  // {
  //   freezeTableName: true,
  // }
);

db.sync().then(() => console.log("Database telah sinkron"));

export default User;
