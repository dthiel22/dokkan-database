// import models
const Character = require('./Character');
// const CharacterCategory = require('./CharacterCategory');
const Category = require('./Category');

const Link = require('./Link');

//TODO: great example from gloomhaven helper
// AddedMonster.belongsToMany(Encounter,{through: `EncounterAddedMonster`})

Character.belongsToMany(Category,{through: 'CharacterCategory'})
Category.belongsToMany(Character,{through: 'CharacterCategory'})

Character.belongsToMany(Link,{through: 'CharacterLink'})
Link.belongsToMany(Character,{through: 'CharacterLink'})

module.exports = {
  Character,
  Category,
  Link
};
