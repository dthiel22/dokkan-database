const { Character } = require('../models');

const characterData = [
    {
      char_link: "https://dbz-dokkanbattle.fandom.com/wiki/Mystery_Super_Technique_Super_Saiyan_3_Goku",
      title: "Mystery Super Technique",
      name: "Super Saiyan 3 Goku",
      rarity: "UR",
      type: "SAGL",
       cost: "42",
      dokkan_id: "1321",
      ls_description: "AGL Type Ki +3, ATK +3000 ",
      ls_description_eza: "AGL Type Ki +3 and HP, ATK & DEF +70%",
      sa_type: null,
      sa_name: "Dragon Fist",
      sa_description: "Causes supreme damage to enemy and lowers DEF  <Lowers enemy's DEF by 40% for 3 turns>  ",
      sa_description_eza: "Causes immense damage to enemy and greatly lowers DEF  <Lowers enemy's DEF by 50% for 3 turns>  ",
      ultra_sa_name: null,
      ultra_sa_description: null,
      ultra_sa_description_eza: null,
      ps_name: "Battle to the End",
      ps_description: "ATK +100% for 7 turns from start of turn",
      ps_description_eza: "DEF +70% at start of turn; ATK +120% for 7 turns from start of turn",
      sa_type_active: null,
      active_skill_name: null,
      active_skill: null,
      active_skill_condition: null,
      active_skill_condition_eza: null,
      transform_type: null,
      transform_condition: null,
      transform_condition_eza: null,
      category: "Majin Buu Saga",
      jp_date: "31 Dec 2015",
      glb_date: "5 May 2016",
      jp_date_eza: null,
      glb_date_eza: "15 Mar 2018"
    },
  ]

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
