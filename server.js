/* eslint-disable no-console */

const server = require('./app');
const db = require('./src/Config/dbConnec');

// const orm = require('./src/Config/dbConnec');

const run = async () => {
  try {
    await db.authenticate();
    await db.sync({ alter: true });
    server.listen(process.env.PORT || 3000);
  } catch (error) {
    console.log(error);
  }
};

run();
