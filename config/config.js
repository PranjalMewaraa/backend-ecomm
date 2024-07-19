let path = require("path");
const fs = require("fs");

let fixture = path.join(__dirname, "../.env");
let dotenv = require("dotenv").config({ path: fixture });
let config = dotenv.parsed;
module.exports = {
  development: {
    username: process.env.DBUSERNAME
      ? process.env.DBUSERNAME
      : config?.DBUSERNAME,
    password: process.env.DBPASSWORD
      ? process.env.DBPASSWORD
      : config?.DBPASSWORD,
    database: process.env.DBNAME ? process.env.DBNAME : config?.DBNAME,
    host: process.env.DBHOST ? process.env.DBHOST : config?.DBHOST,
    port: process.env.DBPORT ? process.env.DBPORT : config?.DBPORT,
    dialect: process.env.DIALECT ? process.env.DIALECT : config?.DIALECT,
    ssl: false,
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
  production: {
    username: process.env.DBUSERNAME
      ? process.env.DBUSERNAME
      : config?.DBUSERNAME,
    password: process.env.PASSWORD ? process.env.PASSWORD : config?.PASSWORD,
    database: process.env.DBNAME ? process.env.DBNAME : config?.DBNAME,
    host: process.env.HOST ? process.env.HOST : config?.HOST,
    port: 5432,
    dialect: process.env.DIALECT ? process.env.DIALECT : config?.DIALECT,

    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};
