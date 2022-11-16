const { LinkSkill } = require('../models');

const linkSkillData = [
    {
      name: "Golden Warrior",
    }
  ]

const seedLinkSkills = () => LinkSkill.bulkCreate(linkSkillData);

module.exports = seedLinkSkills;
