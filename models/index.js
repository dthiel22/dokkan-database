// import models
const Character = require('./Character');
const LinkSkill = require('./LinkSkill');

Character.hasMany(LinkSkill)

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
  LinkSkill,
};
