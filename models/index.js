// import models
const Character = require('./Character');
const Category = require('./Category');
const LinkSkill = require('./LinkSkill');

//TODO: great example from gloomhaven helper
// AddedMonster.belongsToMany(Encounter,{through: `EncounterAddedMonster`})

Character.belongsToMany(Category,{through: 'CharacterCategory'})
Category.hasMany(Character,{through: 'CharacterCategory'})

// // Products belongToMany Tags (through ProductTag)
// Character.belongsToMany(LinkSkill, {
//   through: {
//   model: LinkSkillChar,
//     //TODO: WHAT TO PUT HERE?
//   foreignKey: 'product_id',
//   },
//   as: 'product_tags',
// });

// // Tags belongToMany Products (through ProductTag)
// LinkSkill.belongsToMany(Character, {
//   through: {
//   model: LinkSkillChar,
//   //TODO: WHAT TO PUT HERE?
//   foreignKey: 'tag_id',
//   },
//   as: 'product_tags',
// });


module.exports = {
  Character,
  Category,
  LinkSkill,
};
