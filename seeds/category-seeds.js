const { Category } = require("../models");

const categoryData = [
  { 
    name: "Fusion" 
  },
  { 
    name: "Shadow Dragon Saga" 
  },
  { 
    name: "World Tournament" 
  },
  { 
    name: "Peppy Gals" 
  },
  { 
    name: "Hybrid Saiyans" 
  },
  { 
    name: "Universe Survival Saga" 
  },
  { 
    name: "Resurrected Warriors" 
  },
  { 
    name: "Realm of Gods" 
  },
  { 
    name: "Majin Buu Saga" 
  },
  {
    name: "Potara",
  },
  {
    name: "Low-Class Warrior",
  },
  {
    name: "Super Saiyan 3",
  },
  {
    name: "Giant Form",
  },
  {
    name: "Planet Namek Saga",
  },
  {
    name: "Ginyu Force",
  },
  {
    name: "Movie Bosses",
  },
  {
    name: "Pure Saiyans",
  },
  {
    name: "Namekians",
  },
  {
    name: "Future Saga",
  },
  {
    name: "Full Power",
  },
  {
    name: "Androids",
  },
  {
    name: "Representatives of Universe 7",
  },
  {
    name: "Transformation Boost",
  },
  {
    name: "Wicked Bloodline",
  },
  {
    name: "Dragon Ball Seekers",
  },
  {
    name: "Time Travelers",
  },
  {
    name: "Universe 6",
  },
  {
    name: "Joined Forces",
  },
  {
    name: "Movie Heroes",
  },
  {
    name: "Goku's Family",
  },
  {
    name: "Vegeta's Family",
  },
  {
    name: "Artificial Life Forms",
  },
  {
    name: "Youth",
  },
  {
    name: "DB Saga",
  },
  {
    name: "Siblings' Bond",
  },
  {
    name: "Super Saiyans",
  },
  {
    name: "Worthy Rivals",
  },
  {
    name: "Androids/Cell Saga",
  },
  {
    name: "Kamehameha",
  },
  {
    name: "Bond of Master and Disciple",
  },
  {
    name: "Terrifying Conquerors",
  },
  {
    name: "Dragon Ball Heroes",
  },
  {
    name: "Target: Goku",
  },
  {
    name: "Otherworld Warriors",
  },
  {
    name: "Super Saiyan 2",
  },
  {
    name: "Final Trump Card",
  },
  {
    name: "Exploding Rage",
  },
  {
    name: "Revenge",
  },
  {
    name: "Team Bardock",
  },
  {
    name: "Inhuman Deeds",
  },
  {
    name: "Earthlings",
  },
  {
    name: "Special Pose",
  },
  {
    name: "Majin Power",
  },
  {
    name: "Rapid Growth",
  },
  {
    name: "All-Out Struggle",
  },
  {
    name: "Universe 11",
  },
  {
    name: "Saviors",
  },
  {
    name: "Battle of Wits",
  },
  {
    name: "Power Absorption",
  },
  {
    name: "Giant Ape Power",
  },
  {
    name: "Crossover",
  },
  {
    name: "Space-Traveling Warriors",
  },
  {
    name: "Connected Hope",
  },
  {
    name: "Corroded Body and Mind",
  },
  {
    name: "Turtle School",
  },
  {
    name: "Miraculous Awakening",
  },
  {
    name: "Powerful Comeback",
  },
  {
    name: "Gifted Warriors",
  },
  {
    name: "Planetary Destruction",
  },
  {
    name: "Defenders of Justice",
  },
  {
    name: "Storied Figures",
  },
  {
    name: "GT Heroes",
  },
  {
    name: "GT Bosses",
  },
  {
    name: "Heavenly Events",
  },
  {
    name: "Time Limit",
  },
  {
    name: "Mastered Evolution",
  },
  {
    name: "Legendary Existence",
  },
  {
    name: "Sworn Enemies",
  },
  {
    name: "Bond of Friendship",
  },
  {
    name: "Accelerated Battle",
  },
  {
    name: "Entrusted Will",
  },
  {
    name: "Worldwide Chaos",
  },
  {
    name: "Battle of Fate",
  },
  {
    name: "Power Beyond Super Saiyan",
  },
  {
    name: "Fused Fighters",
  },
  {
    name: "Saiyan Saga",
  },
  {
    name: "Bond of Parent and Child",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
