const seedCharacters = require('./character-seeds');
const seedCharacterCategories = require('./character-category-seeds');
const seedCategories = require('./category-seeds');
const seedCharacterLinks = require('./character-link-seeds');
const seedLinks = require('./link-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedCharacterCategories()
  console.log('\n----- CHARACTER-CATEGORY SYNCED -----\n');
  await seedLinks();
  console.log('\n----- LINKS SEEDED -----\n');
  await seedCharacterLinks()
  console.log('\n----- CHARACTER-LINKS SYNCED -----\n');


  process.exit(0);
};

seedAll();
