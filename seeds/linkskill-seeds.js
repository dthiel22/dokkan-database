const { LinkSkill } = require('../models');

const linkSkillData = [
    {
      name: "Golden Warrior",
      character_id: 1,
    }
  ]

const seedLinkSkills = () => LinkSkill.bulkCreate(linkSkillData);

module.exports = seedLinkSkills;
