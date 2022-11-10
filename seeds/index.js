const seedCharacters = require('./character-seeds');
const seedLinkSkills = require('./linkskill-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');
  await seedLinkSkills();
  console.log('\n----- LINKS SEEDED -----\n');  

  process.exit(0);
};

seedAll();
