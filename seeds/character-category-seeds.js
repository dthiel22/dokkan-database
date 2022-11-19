const { Character, Category } = require("../models");

const CharacterCategoryData = [
  {
    CharacterId: 1321,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1321,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1321,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1321,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1321,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1321,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1321,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1321,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1321,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1321,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1321,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1321,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1321,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1331,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1331,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1331,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1331,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1331,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1331,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1331,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1331,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1331,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1331,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1331,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1331,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1376,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1376,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1376,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1376,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1376,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1376,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1376,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1376,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1376,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1376,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1376,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1376,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1376,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1376,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1376,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1380,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1380,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1380,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1380,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1380,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1380,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1380,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1380,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1380,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1425,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 1425,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1425,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1425,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1425,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1425,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1425,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1425,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1425,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1425,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1425,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1425,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1425,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1439,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1439,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1439,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1439,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1439,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1439,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1439,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1439,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1439,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1439,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1439,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1439,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1439,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1465,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1465,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1465,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1465,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1465,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1465,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1465,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1465,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1465,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1465,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1465,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1465,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1465,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1465,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1465,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1488,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1488,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1488,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1488,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1488,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1488,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1488,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1488,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1488,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1488,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1500,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1500,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1500,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1500,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1500,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1500,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1500,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1500,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1500,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1500,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1500,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1500,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1503,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1503,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1503,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1503,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1503,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1503,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1503,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1503,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1503,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1503,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1503,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1503,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1503,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1505,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1505,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1505,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1505,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1528,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1528,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1528,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1528,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 1528,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1528,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1528,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1528,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1528,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1530,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1530,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1530,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1530,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1530,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1530,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1530,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1530,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1530,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1531,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1531,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1531,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1531,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1532,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1532,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1532,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1532,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1539,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1539,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1539,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1539,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1539,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1539,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1539,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1539,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1539,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1539,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1539,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1539,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1540,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1540,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1540,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1540,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1540,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1540,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1540,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1540,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1540,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1540,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1544,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1544,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1544,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1554,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1554,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1554,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1554,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1554,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1554,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1554,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1554,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1555,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1555,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1555,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1555,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1555,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1555,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1558,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 1558,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1558,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1558,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1558,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1566,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1566,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1566,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1566,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1566,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1566,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1566,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1566,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1566,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1566,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1566,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1567,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1567,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1567,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1567,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1567,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1567,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1567,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1567,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1567,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1567,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1573,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1573,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1573,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1573,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1573,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1573,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1573,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1573,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1574,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1574,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1574,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1574,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1574,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1574,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1574,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1574,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1575,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 1575,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1575,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 1575,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1575,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1575,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1575,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1575,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1580,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1580,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1580,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1602,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1602,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1602,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1602,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1602,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1602,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1602,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1602,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1602,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1621,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1621,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1621,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1621,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1621,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1621,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1621,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1621,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1621,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1621,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1621,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1621,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1621,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1621,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1621,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1621,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1621,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1633,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 1633,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1633,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1652,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 1652,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1652,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1652,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1652,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1652,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1652,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1652,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1652,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 1652,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1652,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1652,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1666,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1666,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1666,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1666,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1666,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1666,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1666,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1666,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1666,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1666,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1667,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1667,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1667,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1667,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1667,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1667,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1667,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1667,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1667,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1667,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1667,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1669,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1669,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1669,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1669,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1669,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1669,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1669,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1669,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1669,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1669,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1670,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1670,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1670,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1670,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1670,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1670,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1670,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1670,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1670,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1670,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1674,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1674,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1674,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1674,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1674,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1674,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1674,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1674,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1674,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1677,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1677,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1677,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1677,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1677,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1677,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1679,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1679,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1679,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1679,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1679,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1679,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1679,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1710,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 1710,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 1710,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1710,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1710,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1710,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1710,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1712,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1712,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1712,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1712,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1712,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1712,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1712,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1712,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1712,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1712,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1712,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1712,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1712,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1714,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1714,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1714,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1714,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1714,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1714,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1714,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1714,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1714,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1714,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1714,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1714,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1718,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1718,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1718,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1718,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1718,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1718,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1718,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1718,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1719,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1719,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1719,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1719,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1719,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1719,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1719,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1719,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1719,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1719,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1719,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1719,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1719,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1732,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 1732,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1732,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1732,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1732,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1732,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 1732,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1734,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1734,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 1734,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1734,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 1739,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1739,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1739,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1739,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1739,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1739,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1739,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1739,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1739,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1739,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1739,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1739,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1739,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1739,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1746,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1746,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1746,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1746,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1746,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1746,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1746,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1746,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1746,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId:  1747,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId:  1747,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId:  1747,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId:  1747,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId:  1747,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId:  1747,
    CategoryName: "Turtle School"
    },
    {
    CharacterId:  1747,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId:  1747,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1761,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1761,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1761,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1761,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1761,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1761,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1761,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1761,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1761,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1761,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1761,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1768,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 1768,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1768,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1768,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1768,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1768,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1768,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1768,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 1768,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1768,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1768,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1768,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1768,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 1774,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1774,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1774,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1774,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1774,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 1774,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1774,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1774,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1774,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1781,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1781,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1781,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1781,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1781,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1781,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1781,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1784,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1784,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1784,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1784,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1784,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1784,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1784,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1797,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1797,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 1797,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1797,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1797,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1797,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1797,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1797,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1797,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1797,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1797,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1797,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1798,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1798,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 1798,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1798,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1798,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1798,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1798,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1798,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1798,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1798,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1798,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1803,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1803,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1803,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1803,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1803,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1803,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1803,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1803,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1803,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1807,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 1807,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1807,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1807,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1807,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1807,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1807,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1808,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1808,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1808,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1808,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1808,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1808,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1808,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1808,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1808,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1808,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1808,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 1808,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1809,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1809,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1809,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1809,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1809,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1809,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1809,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1809,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1809,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1813,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1813,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1813,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1813,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1813,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1813,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1813,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1813,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1813,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1813,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1813,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1829,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1829,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 1829,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1829,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1829,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1829,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1829,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 1829,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1829,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1829,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1829,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1829,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1829,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1842,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1842,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1842,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1842,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1842,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1843,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1843,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1843,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1843,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1843,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1851,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 1851,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 1851,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1851,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1851,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1851,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1851,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1851,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1851,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1851,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1853,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1853,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1853,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1853,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1853,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1853,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1853,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1853,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1853,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1853,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1854,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1854,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1854,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1854,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1854,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1854,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1854,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1854,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1855,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1855,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1855,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1855,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1855,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1855,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1855,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1855,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1856,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1856,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1856,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1856,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1856,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1856,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1856,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1856,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1856,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1856,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1856,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1857,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1857,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1857,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1857,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1857,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1857,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1857,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1857,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1858,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1858,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1858,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1858,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1858,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1858,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1858,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1858,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1858,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1858,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1861,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1861,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1861,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1861,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1861,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1861,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1861,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1861,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1861,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1861,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1861,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1861,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1861,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1862,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1862,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1862,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1862,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1862,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1862,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1862,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1862,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1862,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1862,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1862,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1862,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1862,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1863,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1863,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1863,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1863,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 1863,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1863,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1863,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1863,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1863,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1863,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1863,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1863,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1863,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1863,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1864,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 1864,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1864,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1864,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1864,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1864,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1871,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 1871,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1871,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1871,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1871,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1871,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1874,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1874,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1874,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1874,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1874,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1874,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1874,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1874,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1874,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1874,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1874,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1874,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1874,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1874,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1875,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1875,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1875,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1875,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1875,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1875,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1875,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1875,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1875,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1875,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1875,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1875,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1875,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1875,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1879,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1879,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 1879,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1879,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1879,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1880,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1880,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 1880,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1880,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1880,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1882,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1882,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1882,
    CategoryName: "Androids"
    },
    {
    CharacterId: 1882,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1882,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1882,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1882,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1882,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1882,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1882,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1882,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1882,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1882,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1882,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1882,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1885,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1885,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1885,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1885,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1885,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1885,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1885,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1887,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1887,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1887,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1887,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1887,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1887,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1887,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1887,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1887,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1887,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1889,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1889,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1889,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 1889,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1889,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1889,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1889,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 1889,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1889,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1889,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1889,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1889,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1889,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1889,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1889,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1892,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1892,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1892,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1892,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1892,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1892,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1892,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1892,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1892,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1892,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1892,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1893,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1893,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1893,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1893,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1893,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1893,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1893,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1893,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1893,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1893,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1894,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1894,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1894,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1894,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1894,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1894,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1894,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1894,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1894,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1894,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1894,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1894,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1894,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1896,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1896,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1896,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1896,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1898,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1898,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1898,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1898,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1900,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1900,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1900,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1900,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1909,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1909,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1909,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1909,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1909,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1909,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1909,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1909,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1910,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1910,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1910,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1910,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1910,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1910,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1910,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1910,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1911,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1911,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1911,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1911,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1911,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1911,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1911,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1913,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1913,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1913,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1913,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1922,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 1922,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1922,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1922,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1922,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1922,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1922,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 1923,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 1923,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1923,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1923,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1923,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1923,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1923,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 1924,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1924,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1924,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1925,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 1925,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1925,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1925,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1925,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1926,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 1926,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1926,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1926,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1926,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1926,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1933,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1933,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1933,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1933,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1933,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1933,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1933,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1933,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1933,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1933,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1933,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1933,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1935,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1935,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1935,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1935,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1935,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1935,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1935,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1935,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1935,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1937,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 1937,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1937,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1937,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1937,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1937,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 1937,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1937,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1937,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1937,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId:  1938,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId:  1938,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId:  1938,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId:  1938,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId:  1938,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId:  1938,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId:  1938,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId:  1938,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId:  1938,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId:  1938,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1943,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1943,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1943,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1943,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 1943,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1943,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1943,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1943,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1943,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1943,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1943,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1943,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1947,
    CategoryName: ""
    },
    {
    CharacterId: 1948,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1948,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 1948,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1948,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1948,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1948,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1948,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1948,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1948,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1948,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1948,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1948,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1950,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1950,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1950,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1950,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1950,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1950,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1950,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1950,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1950,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1950,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1950,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1950,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1950,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1950,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1950,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1951,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1951,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1951,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1951,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1951,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1951,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1951,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1952,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1952,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1952,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 1952,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 1958,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1958,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1958,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1958,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1958,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1958,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1958,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1958,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1958,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1958,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1958,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1958,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1959,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1959,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1959,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1959,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1959,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1959,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1959,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1959,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1959,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1959,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1959,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1959,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1959,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1962,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 1962,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 1962,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1962,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1962,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1962,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1963,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 1963,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 1963,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1963,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 1963,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1963,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1963,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1964,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1964,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1964,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1964,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1964,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1964,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1964,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 1964,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1964,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1964,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1964,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1964,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1966,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1966,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1966,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1966,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1966,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1966,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1966,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1966,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1966,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1966,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1970,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1970,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1970,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1970,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1970,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1970,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1970,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1970,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 1970,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1970,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1970,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1971,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1971,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1971,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1971,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1971,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1971,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1971,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1971,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1971,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1971,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1971,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1971,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1971,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1972,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1972,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1972,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1972,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1972,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1972,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1972,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1972,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1972,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1972,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1972,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1972,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1973,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1973,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1973,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1973,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1973,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1973,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1973,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1973,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1973,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1973,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1973,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1974,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1974,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1974,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1974,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1974,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1974,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1974,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1974,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1974,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1974,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1974,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1974,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1977,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1977,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1977,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1977,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1977,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1977,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1977,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1977,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1977,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1977,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1977,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1977,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1977,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1977,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1977,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1978,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1978,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1978,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 1978,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1978,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1978,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1978,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 1978,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1978,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1978,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1978,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1978,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1978,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1978,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1978,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1979,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1979,
    CategoryName: "Potara"
    },
    {
    CharacterId: 1979,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 1979,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 1979,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 1979,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1979,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1979,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1979,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1983,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 1983,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1983,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1983,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1983,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1983,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 1983,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1983,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1983,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1983,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1983,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1983,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1986,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 1986,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1986,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1986,
    CategoryName: "Youth"
    },
    {
    CharacterId: 1986,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1986,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 1986,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 1986,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1986,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1986,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 1986,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 1986,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1986,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 1988,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1988,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1988,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1988,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1988,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1988,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1988,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1988,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1988,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1988,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1989,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1989,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1989,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1989,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 1989,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1989,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 1989,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 1989,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 1989,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 1989,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 1989,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1989,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 1989,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1990,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1990,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 1990,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1990,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1990,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 1990,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 1990,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 1990,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 1991,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 1991,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 1991,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1992,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1992,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 1992,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1992,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1992,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1992,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1992,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1992,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1992,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1993,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1993,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1993,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 1993,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 1993,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1993,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 1993,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 1993,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 1993,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 1994,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 1994,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1994,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1994,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1994,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1994,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1994,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1994,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1994,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 1994,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 1994,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1994,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1994,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1994,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1994,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1995,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1995,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 1995,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1995,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 1995,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 1995,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1995,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 1995,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 1995,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 1995,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1996,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 1996,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 1996,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 1996,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 1996,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1996,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 1996,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 1996,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 1996,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 1997,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 1997,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1997,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 1997,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 1997,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 1997,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 1997,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1997,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 1997,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 1997,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 1998,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 1998,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 1998,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 1998,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 1998,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 1998,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11000,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11000,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11000,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11000,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11000,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11000,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11000,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11000,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11002,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11002,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11002,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11002,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11002,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11002,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11002,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11002,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11002,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11003,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11003,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11003,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11003,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11003,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11003,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11003,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11003,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11006,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11006,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11006,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11006,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11006,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11006,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11006,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11006,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11006,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11006,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11006,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11006,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11006,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11006,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11007,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11007,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11007,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11007,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11007,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11007,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11007,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11007,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11007,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11007,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11007,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11007,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11007,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11007,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11007,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11016,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11016,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11016,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11016,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11016,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11016,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11016,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11016,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11016,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11016,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11016,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11016,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11016,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11025,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11025,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11025,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11025,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11025,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11025,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11025,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11025,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11025,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11025,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11025,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11025,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11026,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11026,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11026,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11026,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11026,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11026,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11026,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11026,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11026,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11026,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11026,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11026,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11026,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11027,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11027,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11027,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11027,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11027,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11027,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11027,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11027,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11027,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11027,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11027,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11027,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11027,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11027,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11029,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11029,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11029,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11029,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11029,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11029,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11030,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11030,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11030,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11030,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11030,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11030,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11030,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11030,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11030,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11030,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11030,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11030,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11031,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11031,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11031,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11031,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11031,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11031,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11031,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11031,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11031,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11031,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11031,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11031,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11032,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11032,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11032,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11032,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11032,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11032,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11032,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11032,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11032,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11032,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11032,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11033,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11033,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11033,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11033,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11033,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11036,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11036,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11036,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11036,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11036,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11036,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11036,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11041,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11041,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11041,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11041,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11041,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11041,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11041,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11041,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11041,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11041,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11041,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11041,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11041,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11041,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11043,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11043,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11043,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11043,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11043,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11043,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11043,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11044,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11044,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11044,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11044,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11044,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11044,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11044,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11044,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11044,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11044,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11044,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11045,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11045,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11045,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11045,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11045,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11045,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11045,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11045,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11045,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11046,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11046,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11046,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11046,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11046,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11046,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11046,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11046,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11046,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11048,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11048,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11048,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11048,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11049,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11049,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11049,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11049,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11049,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11049,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11050,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11050,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11050,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11056,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11056,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11056,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11056,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11057,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11057,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11057,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11057,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11057,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11057,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11057,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11057,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11057,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11057,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11058,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11058,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11058,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11058,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11058,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11058,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11058,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11058,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11058,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11061,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11061,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11061,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11061,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11061,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11061,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11061,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11061,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11062,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11062,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11062,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11066,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11066,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11066,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11066,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11066,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11066,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11066,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11066,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11066,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11066,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11066,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11071,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11071,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11071,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11071,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11071,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11071,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11071,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11071,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11071,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11071,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11071,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11072,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11072,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11072,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11072,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11072,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11072,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11072,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11072,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11073,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11073,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11073,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11073,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11073,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11073,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11073,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11073,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11073,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11073,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11073,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11073,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11073,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11074,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11074,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11074,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11074,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11074,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11074,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11074,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11074,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11074,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11074,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11074,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11074,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11075,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11075,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11075,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11075,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11075,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11075,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11075,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11075,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11075,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11075,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11075,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11077,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11077,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11077,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11077,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11077,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11077,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11077,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11077,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11077,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11077,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11078,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11078,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11078,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11078,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11078,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11078,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11078,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11078,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11080,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11080,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11080,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11080,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11080,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11080,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11079,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11079,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11079,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11079,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11079,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11079,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11081,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11081,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11081,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11081,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11081,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11081,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11081,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11081,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11081,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11081,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11081,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11081,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11081,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11083,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11083,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11083,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11083,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11083,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11083,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11083,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11083,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11085,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11085,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11085,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11085,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11085,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11085,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11085,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11085,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11085,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11087,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11087,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11087,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11087,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11089,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11089,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11089,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11089,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11089,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11089,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11090,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11090,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11090,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11090,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11090,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11090,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11094,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11094,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11094,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11094,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11094,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11095,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11095,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11095,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11095,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11095,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11095,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11095,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11096,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11096,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11096,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11096,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11097,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11097,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11097,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11097,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11097,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11097,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11098,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11098,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11098,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11098,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11099,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11099,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11099,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11099,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11099,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11099,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11099,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11104,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11104,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11104,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11104,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11104,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11106,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11106,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11106,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11106,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11106,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11106,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11106,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11106,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11106,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11106,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11106,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11106,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11106,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11106,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11106,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11106,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11106,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11107,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11107,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11107,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11107,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11107,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11107,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11107,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11107,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11107,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11107,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11107,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11107,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11107,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11108,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11108,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11108,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11108,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11108,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11108,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11108,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11108,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11108,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11108,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11108,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11108,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11108,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11110,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11110,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11110,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11110,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11110,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11111,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11111,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11111,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11111,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11111,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11111,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11111,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11111,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11111,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11111,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11111,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11111,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11113,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11113,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11113,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11113,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11113,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11113,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11114,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11114,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11114,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11114,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11114,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11114,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11115,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11115,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11115,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11115,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11115,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11115,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11115,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11115,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11115,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11117,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11117,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11117,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11117,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11118,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11118,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11118,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11118,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11119,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11119,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11119,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11119,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11119,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11119,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11119,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11119,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11119,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11119,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11119,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11121,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11121,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11121,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11121,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11121,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11121,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11130,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11130,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11130,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11130,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11130,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11130,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11130,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11130,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11130,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11130,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11130,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11132,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11132,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11132,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11132,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11132,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11132,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11134,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11134,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11134,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11134,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11134,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11134,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11135,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11135,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11135,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11135,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11135,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11135,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11135,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11135,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11135,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11135,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11135,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11136,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11136,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11136,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11136,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11136,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11136,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11136,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11136,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11137,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11137,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11137,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11137,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11137,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11137,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11137,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11137,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11138,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11138,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11138,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11138,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11138,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11138,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11138,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11138,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11138,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11138,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11138,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11138,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11138,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11138,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11138,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11138,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11139,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11139,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11139,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11139,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11139,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11139,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11139,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11139,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11139,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11139,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11139,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11139,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11139,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11139,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11139,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11143,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11143,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11143,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11143,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11143,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11144,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11144,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11144,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11144,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11144,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11144,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11144,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11144,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11144,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11144,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11144,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11145,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11145,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11145,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11145,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11145,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11146,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11146,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11146,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11146,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11146,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11146,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11147,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11147,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11147,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11147,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11147,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11147,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11147,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11147,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11147,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11147,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11163,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11163,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11164,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11164,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11164,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11164,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11164,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11164,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11164,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11164,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11164,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11164,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11164,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11164,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11164,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11164,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11164,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11164,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11168,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11168,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11168,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11168,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11168,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11168,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11168,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11168,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11168,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11168,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11168,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11171,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11171,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11171,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11171,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11171,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11171,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11171,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11171,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11171,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11171,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11172,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11172,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11172,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11172,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11172,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11172,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11172,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11172,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11172,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11172,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11178,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11178,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11178,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11178,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11178,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11178,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11178,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11178,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11178,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11178,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11178,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11180,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11180,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11180,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11180,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11180,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11180,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11180,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11180,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11180,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11180,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11185,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11185,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11185,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11190,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11190,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11190,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11190,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11190,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11190,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11190,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11200,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11200,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11200,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11200,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11200,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11200,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11200,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11200,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11200,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11200,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11203,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11203,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11203,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11203,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11203,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11203,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11203,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11203,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11203,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11203,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11203,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11210,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11210,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11210,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11210,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11210,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11210,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11210,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11212,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11212,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11212,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11212,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11212,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11213,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11213,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11213,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11213,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11213,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11213,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11215,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11215,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11215,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11215,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11215,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11215,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11215,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11215,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11216,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11216,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11216,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11216,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11216,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11216,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11216,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11216,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11216,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11233,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11233,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11233,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11233,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11233,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11233,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11233,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11233,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11233,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11233,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11233,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11233,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11236,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11236,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11236,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11236,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11236,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11236,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11236,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11236,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11236,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11236,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11238,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11238,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11238,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11238,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11238,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11238,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11238,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11239,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11239,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11239,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11239,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11239,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11240,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11240,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11240,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11240,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11240,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11240,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11242,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11242,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11242,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11242,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11242,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11242,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11242,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11242,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11246,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11246,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11246,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11246,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11246,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11246,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11265,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11265,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11265,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11265,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11268,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11268,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11268,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11268,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11268,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11268,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11268,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11268,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11268,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11268,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11270,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11270,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11270,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11270,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11270,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11270,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11272,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11272,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11272,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11272,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11272,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11272,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11272,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11272,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11272,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11272,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11272,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11272,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11272,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11274,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11274,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11274,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11274,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11274,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11274,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11274,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11274,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11274,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11274,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11274,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11274,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11276,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11276,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11276,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11276,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11276,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11276,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11276,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11276,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11276,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11276,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11277,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11277,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11277,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11277,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11277,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11277,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11277,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11277,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11277,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11277,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11278,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11278,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11278,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11278,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11278,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11278,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11278,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11278,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11289,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11289,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11289,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11289,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11289,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11290,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11290,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11290,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11290,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11290,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11290,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11290,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11290,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11290,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11290,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11290,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11292,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11292,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11292,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11292,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11292,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11292,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11292,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11293,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11293,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11293,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11293,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11293,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11293,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11293,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11293,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11293,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11293,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11293,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11293,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11293,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11296,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11296,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11296,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11296,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11296,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11296,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11296,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11296,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11296,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11296,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11296,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11299,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11299,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11299,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11299,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11299,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11299,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11299,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11301,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11301,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11301,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11301,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11301,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11301,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11303,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11303,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11303,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11303,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11303,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11303,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11305,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11305,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11305,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11305,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11305,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11305,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11305,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11307,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11307,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11307,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11307,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11307,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11307,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11309,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11309,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11309,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11309,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11309,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11309,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11310,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11310,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 11310,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11310,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11310,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11310,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11310,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11311,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11311,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11311,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11311,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11311,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11311,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11311,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11311,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11311,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11311,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11312,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11312,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11312,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11312,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11312,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11312,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11312,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11312,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11316,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11316,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11316,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11316,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11316,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11316,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11316,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11316,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11321,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11321,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11321,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11321,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11321,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11321,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11321,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11321,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11321,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11324,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11324,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11324,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11324,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11324,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11324,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11324,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11325,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11325,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11325,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11325,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11325,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11325,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11325,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11326,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11326,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11326,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11326,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11326,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11326,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11326,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11330,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11330,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11330,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11330,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11330,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11330,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11330,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11330,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11332,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11332,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11332,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11332,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11332,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11332,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11332,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11332,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11332,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11332,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11332,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11332,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11334,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11334,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11334,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11334,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11334,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11334,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11334,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11334,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11338,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11338,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11338,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11338,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11338,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11338,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11339,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11339,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11339,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11339,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11339,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11339,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11341,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11341,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11341,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11341,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11341,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11341,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11341,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11341,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11341,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11341,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11341,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11342,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11342,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11342,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11342,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11342,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11343,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11343,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11343,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11343,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11343,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11343,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11343,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11343,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11343,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11343,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11343,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11343,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11353,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11353,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11353,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11353,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11353,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11353,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11353,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11353,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11353,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11353,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11354,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11354,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11354,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11354,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11354,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11354,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11354,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11354,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11354,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11354,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11354,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11354,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11354,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11354,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11354,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11354,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11357,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11357,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11357,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11357,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11357,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11357,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11357,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11359,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11359,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11359,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11359,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11359,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11359,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11359,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11359,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11359,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11359,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11359,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11359,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11359,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11360,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11360,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11360,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11360,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11360,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11360,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11360,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11360,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11360,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11360,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11360,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11360,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11368,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11368,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11368,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11368,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11368,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11368,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11368,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11368,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11371,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11371,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11371,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11371,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11371,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11371,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11371,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11373,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11373,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11373,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11373,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11373,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11373,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11373,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11373,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11373,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11373,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11373,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11376,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11376,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11376,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11376,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11376,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11377,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11377,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11377,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11377,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11377,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11377,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11379,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11379,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11379,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11379,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11379,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11379,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11379,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11381,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11381,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11381,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11381,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11381,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11381,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11381,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11383,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11383,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11383,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11383,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11383,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11383,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11383,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11383,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11383,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11383,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11383,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11383,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11383,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11383,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11383,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11383,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11383,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11386,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11386,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11386,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11386,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11386,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11386,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11386,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11386,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11386,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11387,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11387,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11387,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11387,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11387,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11387,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11387,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11387,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11388,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11388,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11388,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11388,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11388,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 11388,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11388,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11391,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11391,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11391,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 11391,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11391,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11391,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11394,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11394,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11394,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 11394,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11394,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11395,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11395,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11395,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11395,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11395,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11395,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11396,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11396,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11396,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11396,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 11396,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11396,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11396,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11396,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11401,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11401,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11401,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11401,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11401,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11401,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11401,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11401,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11401,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11401,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11402,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11402,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11402,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11402,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11402,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11402,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11402,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11402,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11402,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11402,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11404,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11404,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11404,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11404,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11404,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11404,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11404,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11404,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11404,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11404,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11404,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11405,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11405,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11405,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11405,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11405,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11405,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11405,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11405,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11405,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11405,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11405,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11406,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11406,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11406,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11406,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11406,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11408,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11408,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11408,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11408,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11408,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11411,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11411,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11411,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11411,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11411,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11411,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11413,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11413,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11413,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11413,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11413,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11413,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11413,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11413,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11413,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11413,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11413,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11413,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11413,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11413,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11413,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11413,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11414,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11414,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11414,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11414,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11414,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11415,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11415,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11415,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11415,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11415,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11415,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11415,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11415,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11415,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11416,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11416,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11416,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11416,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11416,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11416,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11416,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11417,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11417,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11417,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11417,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11417,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11417,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11418,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11418,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11418,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11418,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11418,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11419,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11419,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11419,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11419,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11421,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11421,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11421,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11421,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11421,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11421,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11421,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11421,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11421,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11421,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11421,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11421,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11422,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11422,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11422,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11422,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11422,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11422,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11422,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11422,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11422,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11422,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11422,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11422,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11433,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11433,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11433,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11433,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11433,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11433,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11433,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11433,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11435,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11435,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11435,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11435,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11435,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11435,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11435,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11435,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11435,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId:  11437,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId:  11437,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId:  11437,
    CategoryName: "Full Power"
    },
    {
    CharacterId:  11437,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId:  11437,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId:  11437,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId:  11437,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId:  11437,
    CategoryName: "Saviors"
    },
    {
    CharacterId:  11437,
    CategoryName: "Turtle School"
    },
    {
    CharacterId:  11437,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId:  11437,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId:  11437,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId:  11437,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId:  11437,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11439,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11439,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11439,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11439,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11439,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11439,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11439,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11439,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11439,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11439,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11439,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11446,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11446,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11446,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11446,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11446,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11446,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11446,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11447,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11447,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11447,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11447,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11447,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11447,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11447,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11447,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11447,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11447,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11449,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11449,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11449,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11449,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11449,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11449,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11449,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11449,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11449,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11449,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11449,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11450,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11450,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11450,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11450,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11450,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11451,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11451,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11451,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11451,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11451,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11451,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11464,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11464,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11464,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11464,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11464,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11464,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11464,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11466,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11466,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11466,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11466,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11466,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11466,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11466,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11466,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11468,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11468,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11468,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11468,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11468,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11468,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11468,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11468,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11468,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11468,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11468,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11471,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11471,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11471,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11471,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11471,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11471,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11471,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11471,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11471,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11471,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11471,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11471,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11471,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11471,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11471,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11472,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11472,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11472,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11472,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11472,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11472,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11472,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11472,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11472,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11472,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11474,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11474,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11474,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11474,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11476,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11476,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11476,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11476,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11476,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11476,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11476,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11476,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11476,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11476,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11476,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11476,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11476,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11476,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11476,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11476,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11482,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11482,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11482,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11482,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11482,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11482,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11482,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11482,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11482,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11482,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11482,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11482,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11482,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11482,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11482,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11491,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11491,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11491,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11491,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11491,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11491,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11491,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11491,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11491,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11493,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11493,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11493,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11493,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11493,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11493,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11494,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11494,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11494,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11494,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11494,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11494,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11494,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11496,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11496,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11496,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11496,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11496,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11497,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11497,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11497,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11497,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11497,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11497,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11498,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11498,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11498,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11498,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11498,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11498,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId:  11499,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId:  11499,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId:  11499,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId:  11499,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId:  11499,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId:  11499,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId:  11499,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId:  11500,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId:  11500,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId:  11500,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId:  11500,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId:  11500,
    CategoryName: "Youth"
    },
    {
    CharacterId:  11500,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId:  11500,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId:  11500,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11502,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11502,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11502,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11502,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11503,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11503,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11503,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11503,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11503,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11503,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11503,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11505,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11505,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11505,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11505,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11505,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11505,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11505,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11505,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11505,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11505,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11505,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11510,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11510,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11510,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11510,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11510,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11510,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11510,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11511,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11511,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11511,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11511,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11511,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11511,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11511,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11511,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11511,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11511,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11511,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11511,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11511,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11511,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11511,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11513,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11513,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11513,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11513,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11513,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11513,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11513,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11513,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11513,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11513,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11514,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11514,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11514,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11514,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11514,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11514,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11514,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11514,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11517,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11517,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11517,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11517,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11517,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11517,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11518,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11518,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11518,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11518,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11518,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11518,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11520,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11520,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11520,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11521,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11521,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11521,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11521,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11521,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11521,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11521,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11522,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11522,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11522,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11522,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11522,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11522,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11522,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11523,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11523,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11523,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11523,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11523,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11523,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11523,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11523,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11524,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11524,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11524,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11525,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11525,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11525,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11525,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11525,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11525,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11525,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11525,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11526,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11526,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11526,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11526,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11526,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11526,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11526,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11526,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11526,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11529,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11529,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11529,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11529,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11529,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11529,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11529,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11531,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11531,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11531,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11531,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11531,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11531,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11531,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11531,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11537,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11537,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11537,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11537,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11537,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11537,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11537,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11537,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11537,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11537,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11537,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11541,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11541,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11541,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11541,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11542,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11542,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11542,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11542,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11542,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11547,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11547,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11547,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11547,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11547,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11547,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11547,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11547,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11547,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11547,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11547,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11556,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11556,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11556,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11556,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11556,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11556,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11556,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11556,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11556,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11556,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11556,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11556,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11557,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11557,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11557,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11557,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11557,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11557,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11557,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11557,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11557,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11557,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11557,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11557,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11559,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11559,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11559,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11559,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11561,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11561,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11561,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11561,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11565,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11565,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11565,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11565,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11565,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11565,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11565,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11565,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11567,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11567,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11567,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11567,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11567,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11567,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11567,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11575,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11575,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11575,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11575,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11575,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11575,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11575,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11575,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11575,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11575,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11575,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11577,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11577,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11577,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11577,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11577,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11577,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11577,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11577,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11577,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11577,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11577,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11577,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11579,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11579,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11579,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11579,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11581,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11581,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11581,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11581,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11584,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11584,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11584,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11584,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11584,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11584,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11584,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11587,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11587,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11587,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11587,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11587,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11587,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11587,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11587,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11587,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11587,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11587,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11587,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11587,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11588,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11588,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11588,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11588,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11588,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11588,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11588,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11588,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11588,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11589,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11589,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11589,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11589,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11589,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11589,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11589,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11589,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11589,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11589,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11589,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11589,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11589,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11590,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11590,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11590,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11590,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11590,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11590,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11590,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11590,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11590,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11591,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11591,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11591,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11591,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11591,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11591,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11591,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11591,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11595,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11595,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11595,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11595,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11597,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11597,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11597,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11597,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11597,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11597,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11597,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11597,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11597,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11597,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11600,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11600,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11600,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11600,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11600,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11600,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11600,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11600,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11600,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11603,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11603,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11603,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11603,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11603,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11603,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11603,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11603,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11603,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11603,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11605,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11605,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11605,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11605,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11605,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11605,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11605,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11605,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11605,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11605,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11608,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11608,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11610,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11610,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11610,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11610,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11610,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11610,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11610,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11610,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11610,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11610,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11610,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11612,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11612,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11612,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11612,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11612,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11612,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11612,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11612,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11612,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11612,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11612,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11615,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11615,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11615,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11615,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11615,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11615,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11615,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11615,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11615,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11615,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11615,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11615,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11620,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11620,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11623,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11623,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11623,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11623,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11623,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11623,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11625,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11625,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11625,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11625,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11630,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11630,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11630,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11630,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11630,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11631,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11631,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11631,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11631,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11631,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11631,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11631,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11631,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11631,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11631,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11636,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11636,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11636,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11636,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11636,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11636,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11637,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11637,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11637,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11637,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11637,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11637,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11639,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11639,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11639,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11639,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11639,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11639,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11639,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11639,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11639,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11640,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11640,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11640,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11640,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11640,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11640,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11640,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11640,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11640,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11640,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11640,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11640,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11644,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11644,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11644,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11644,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11644,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11644,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11644,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11644,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11644,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11645,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11645,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11645,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11645,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11645,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11645,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11645,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11645,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11645,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11646,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11646,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11646,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11646,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11646,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11646,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11646,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11646,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11646,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11646,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11646,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11646,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11647,
    CategoryName: ""
    },
    {
    CharacterId: 11649,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11649,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11649,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11649,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11649,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11649,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11649,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11649,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11649,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11649,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11649,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11651,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11651,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11651,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11651,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11651,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11651,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11651,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11651,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11651,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11651,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11651,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11651,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11651,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11651,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11651,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11651,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11657,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11657,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11657,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11657,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11657,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11657,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11657,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11657,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11657,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11657,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11657,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11657,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11657,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11657,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11657,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11657,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11657,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11657,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11657,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11658,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11658,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11658,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11658,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11658,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11658,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11658,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 11658,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11658,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11658,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11658,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11661,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11661,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11661,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11661,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11661,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11661,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11661,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11661,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11661,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11661,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11661,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11663,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11663,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11663,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11663,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11663,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11663,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11663,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11663,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11663,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11663,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11663,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11663,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11665,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11665,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11665,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11665,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11665,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11665,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11665,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11665,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11673,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11673,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11673,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11673,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11673,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11673,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11674,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11674,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11674,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11674,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11674,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11674,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11674,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11674,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11674,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11674,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11675,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11675,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11675,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11675,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11675,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11676,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11676,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11676,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11676,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11676,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11676,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11676,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11676,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11677,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11677,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11677,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11677,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11677,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11677,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11678,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11678,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11678,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11678,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11678,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11678,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11680,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11680,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11680,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11680,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11680,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11680,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11680,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11680,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11681,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11681,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11681,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11681,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11681,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11681,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11681,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11681,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11681,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11681,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11683,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11683,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11683,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11683,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11683,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11683,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11683,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11684,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11684,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11684,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11684,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11684,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11684,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11684,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11684,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11684,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11684,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11686,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11686,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11686,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11686,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11686,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11686,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11686,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11686,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11687,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11687,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11687,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11687,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11687,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11687,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11687,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11687,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11687,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11687,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11687,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11687,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11687,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11690,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11690,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11690,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11690,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11690,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11690,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11690,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11690,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11702,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11702,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11702,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11702,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11702,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11702,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11704,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11704,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11704,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11704,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11704,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11706,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11706,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11706,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11706,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11706,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11706,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11706,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11708,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11708,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11708,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11708,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11708,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11708,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11708,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11708,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11708,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11708,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11708,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11708,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11708,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11712,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11712,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11712,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11712,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11712,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11712,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11712,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11712,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11712,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11712,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11712,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11716,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11716,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11716,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11716,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11716,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11716,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11716,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11716,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11716,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11716,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId:  11718,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId:  11718,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId:  11718,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId:  11718,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId:  11718,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId:  11718,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId:  11718,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId:  11718,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId:  11718,
    CategoryName: "Saviors"
    },
    {
    CharacterId:  11718,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId:  11718,
    CategoryName: "Turtle School"
    },
    {
    CharacterId:  11718,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId:  11718,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId:  11718,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId:  11718,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId:  11718,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId:  11718,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId:  11718,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11722,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11722,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11722,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11722,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11722,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11722,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11722,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11722,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11722,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11722,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11724,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11724,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11724,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11724,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11724,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11724,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11724,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11726,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11726,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11726,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11726,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11726,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11726,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11726,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11728,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11728,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11728,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11728,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11728,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11728,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11728,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11730,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11730,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11730,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11730,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11730,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11730,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11730,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11730,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11732,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11732,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11732,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11732,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11732,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11734,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11734,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11734,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11734,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11734,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11734,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11734,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11734,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11734,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11735,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11735,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11735,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11735,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11735,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11735,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11735,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11735,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11735,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11737,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11737,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11737,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11737,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11737,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11737,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11737,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11738,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11738,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11738,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11738,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11741,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11741,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11741,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11741,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11741,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11741,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11741,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11741,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11741,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11741,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11741,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11741,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11741,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11741,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11741,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11741,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11741,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11742,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11742,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11742,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11742,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11742,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11742,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11742,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11742,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11742,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11742,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11743,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11743,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11743,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11743,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11743,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11743,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11743,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11743,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11744,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11744,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11744,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11744,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11744,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11747,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 11747,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11747,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11749,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11749,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11749,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11749,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11749,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11749,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11749,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11749,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11749,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11749,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11751,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11751,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11751,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11751,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11751,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11751,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11751,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11755,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11755,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11755,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11755,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11755,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11755,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11757,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11757,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11757,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11759,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11759,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11759,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11759,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11759,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11762,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11762,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11762,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11762,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11762,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11762,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11762,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11762,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11762,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11762,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11762,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11763,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11763,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11763,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11763,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11763,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11763,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11763,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11763,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11763,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11763,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11763,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11763,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11763,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11763,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11763,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11763,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11763,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11763,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11763,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11763,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11766,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11766,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11766,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11766,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11766,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11766,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11766,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11766,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11766,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11766,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11766,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11766,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11768,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11768,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11768,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11768,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11768,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11768,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11770,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 11770,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11770,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 11772,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11772,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11772,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11772,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11772,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11772,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11772,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11772,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11772,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11774,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11774,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11774,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11774,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11774,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11774,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11774,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11774,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11774,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11774,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11774,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11774,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11777,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11777,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11777,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11777,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11777,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11777,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11777,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11777,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11777,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11777,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11777,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11778,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11778,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11778,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11778,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11778,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11778,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11778,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11778,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11778,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11778,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11778,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11778,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11778,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11778,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11780,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11780,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11780,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11780,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11780,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11780,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11782,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11782,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11782,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11782,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11782,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11784,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11784,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11784,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11784,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11784,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11784,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11789,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11789,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11789,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11789,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11789,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11789,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11789,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11789,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11789,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11789,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11790,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11790,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11790,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11790,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11790,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11790,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11790,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11790,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11790,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11790,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11790,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11790,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11790,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11790,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11790,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11790,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11790,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11793,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11793,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11793,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11793,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11793,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11795,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11795,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11795,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11795,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11795,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11795,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11796,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11796,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11796,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11796,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11796,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11796,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11796,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11796,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11802,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11802,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11802,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11802,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11802,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11803,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11803,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11803,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11803,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11803,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11806,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11806,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11806,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11806,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11806,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11808,
    CategoryName: ""
    },
    {
    CharacterId: 11810,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11810,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11810,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11810,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11810,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11810,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11810,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11810,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11812,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11812,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11812,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11812,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11812,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11812,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11812,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11812,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11812,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11812,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11815,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11815,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11815,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11815,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11815,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11815,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11815,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11815,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11815,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11815,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11815,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11819,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11819,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11819,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11819,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11819,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11819,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11819,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11819,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11822,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11822,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11822,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11822,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11822,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11822,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11822,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11824,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11824,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11824,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11824,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11824,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11824,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11824,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11825,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11825,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11825,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11825,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11825,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11825,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11825,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11825,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11825,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11825,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11825,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11825,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11827,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11827,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11827,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11827,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11827,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11827,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11827,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11830,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11830,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11830,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 11830,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11830,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11830,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11832,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11832,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11832,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11832,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11832,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11833,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11833,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11833,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11833,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11833,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11833,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11833,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11833,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11833,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11833,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11833,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11833,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11834,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11834,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11834,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11834,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11834,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11834,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11834,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11834,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11834,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11834,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11834,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11836,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11836,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11836,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11836,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11836,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11836,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11840,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11840,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11840,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11840,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11841,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11841,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11841,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11841,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11841,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11841,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11841,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11841,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11841,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11846,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11846,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11846,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11846,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11846,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 11846,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11846,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11848,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11848,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11848,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11848,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11848,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11848,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11848,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11848,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11849,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11849,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11849,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11849,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11849,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11849,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11849,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11849,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11849,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11849,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11850,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11850,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11850,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11850,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11850,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11852,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11852,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11852,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11852,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11854,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11854,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11854,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11854,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11854,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11854,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11854,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11854,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11854,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11854,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11854,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11854,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11854,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11854,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11854,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11854,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11856,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11856,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11856,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11856,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11858,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11858,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11858,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11858,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11858,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11858,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11858,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11858,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11858,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11859,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11859,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11859,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11861,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11861,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11861,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11861,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11861,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11861,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11862,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11862,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11862,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11862,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11862,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11862,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11862,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11862,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11862,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11862,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11864,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11864,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11864,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11864,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11864,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11864,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11864,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11865,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11865,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11865,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11865,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11865,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11865,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11865,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11865,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11865,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11865,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11865,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11865,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11865,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11866,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11866,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11866,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11866,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11866,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11866,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11866,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11866,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11866,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11868,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11868,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11868,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11868,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11870,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11870,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11870,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11870,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11870,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11870,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11872,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11872,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11872,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11872,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11872,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11872,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11872,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11872,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11874,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11874,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11874,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11874,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11874,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11874,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11874,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11874,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11874,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11874,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11874,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11874,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11874,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11879,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11879,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11879,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11879,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11879,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11879,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11879,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11879,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11879,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11879,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11879,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11879,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11880,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11880,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 11880,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11884,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11884,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11884,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11884,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11884,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11884,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11884,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11887,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11887,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11887,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11887,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11887,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11887,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11887,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11887,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11887,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11887,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11888,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11888,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11888,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11888,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11888,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11888,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11888,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11888,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11888,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11888,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11888,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11893,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11893,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11893,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11893,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11895,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11895,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11895,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11895,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11895,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11899,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11900,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11900,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11900,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11904,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11904,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11904,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11904,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11904,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11906,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11906,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11906,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11906,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11906,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11906,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11906,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11907,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11907,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11907,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11907,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11907,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11907,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11907,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 11907,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11909,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11909,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11909,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11909,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11909,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11909,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11910,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11910,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11910,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11910,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11910,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 11910,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11910,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11914,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11914,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11914,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11914,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11914,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11914,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11914,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11914,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11914,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11914,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 11914,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11914,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11914,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11914,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11914,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11917,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11917,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11917,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11917,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11917,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11920,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11920,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11920,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11920,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11920,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11922,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11922,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11922,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11922,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11922,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11924,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11924,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11924,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11924,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 11924,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11924,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11924,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11926,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11926,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11926,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11926,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11926,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11926,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11926,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11926,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11926,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11926,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11926,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11926,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11926,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11928,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 11928,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11928,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11928,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11928,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11928,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11928,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11930,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 11930,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11930,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11930,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11930,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11930,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11934,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11934,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11934,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11934,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11934,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11934,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11934,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11934,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 11934,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11934,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11936,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11936,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11936,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11936,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11937,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11937,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11937,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11937,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11937,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11937,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 11937,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11937,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11937,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11937,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11939,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11939,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11939,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11939,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11940,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11940,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11940,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11940,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11940,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11946,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11946,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11946,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11946,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11946,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11946,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11946,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11946,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11946,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11946,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11946,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11947,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11947,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11947,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11947,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11947,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11947,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11947,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11947,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11947,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11947,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11947,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11949,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11949,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11949,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 11949,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11949,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11949,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11949,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11952,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11952,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11952,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11952,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11952,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11952,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11953,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11953,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11953,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11953,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11953,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11953,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 11959,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11959,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11959,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11959,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11959,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11959,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11959,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 11959,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11959,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11959,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 11959,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11959,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11959,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11959,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11963,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11963,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11963,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11963,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 11963,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11963,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11963,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11963,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11963,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11963,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11963,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11963,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 11963,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11963,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11963,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11963,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 11963,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11963,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11963,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11966,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11966,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11966,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11966,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11968,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11968,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11968,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 11968,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11969,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11969,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11969,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11969,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 11969,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11970,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11970,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11970,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11970,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11971,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11971,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11971,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11971,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11971,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11971,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11971,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11972,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11972,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11972,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11972,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11972,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11972,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11974,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11974,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11974,
    CategoryName: "Potara"
    },
    {
    CharacterId: 11974,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11974,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11974,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11974,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 11974,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 11974,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 11974,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11974,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11974,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11974,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11974,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11979,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11979,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11979,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11979,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11979,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11979,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11979,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11979,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11981,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11981,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11981,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11981,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11981,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11981,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11981,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11981,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11981,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11981,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11982,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11982,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11982,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11982,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11982,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11982,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11982,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11982,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 11982,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11982,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 11982,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11982,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11982,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11984,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11984,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 11984,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11984,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11984,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11985,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11985,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 11985,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11985,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11986,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 11986,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11986,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11986,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11986,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11986,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11986,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11986,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11986,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11986,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11986,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11986,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11987,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 11987,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 11987,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 11987,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 11987,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 11987,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11988,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11988,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11988,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11988,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11988,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 11988,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 11988,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 11988,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11988,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11988,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11989,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11989,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11989,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 11989,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11989,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11989,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 11989,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11989,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 11989,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11989,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 11989,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 11989,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11989,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11990,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 11990,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 11990,
    CategoryName: "Youth"
    },
    {
    CharacterId: 11990,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 11990,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 11990,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11990,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 11991,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11991,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11991,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11991,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 11991,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 11991,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11991,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 11991,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 11992,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11992,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 11992,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11992,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 11992,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 11992,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11992,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 11992,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 11992,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11993,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 11993,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 11993,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 11993,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 11993,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11995,
    CategoryName: "Androids"
    },
    {
    CharacterId: 11995,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 11995,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 11995,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 11995,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 11995,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11995,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 11995,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 11995,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 11995,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 11995,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 11998,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11998,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11998,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11998,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11998,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11998,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11998,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11998,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 11999,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 11999,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 11999,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 11999,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 11999,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 11999,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 11999,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 11999,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 11999,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 11999,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 11999,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12001,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12001,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12001,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12001,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 12001,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12001,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12003,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12003,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12003,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12003,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12003,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12003,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12003,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12003,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12004,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12004,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12004,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12004,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12004,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12004,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12004,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12005,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12005,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12005,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12005,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12005,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12005,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12005,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12005,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12005,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12005,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12005,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12005,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12007,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12007,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12009,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12009,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12009,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12009,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12009,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12009,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12009,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12009,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12009,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12009,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12009,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12009,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12011,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12011,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12011,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12011,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12013,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12013,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12013,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12013,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12013,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12015,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12015,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12015,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12015,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12015,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12015,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12015,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12015,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12015,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12015,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12015,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12017,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12017,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12017,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12017,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 12017,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12017,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12018,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12018,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12018,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12018,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12018,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12018,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12019,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12019,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12019,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12019,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12019,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12021,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12021,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12021,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12021,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12021,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12021,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12021,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12021,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12021,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12021,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12021,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12021,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12021,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12021,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12021,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12022,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12022,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12022,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12022,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12022,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12022,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12022,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12022,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12022,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12022,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12022,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12022,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12022,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12022,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12022,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12028,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12028,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12028,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12028,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12028,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12028,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12030,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12030,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12030,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12030,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12030,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12030,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12030,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12030,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12030,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12030,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12030,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12030,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12030,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12030,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12031,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12031,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12031,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12031,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12031,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12031,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12031,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12031,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12031,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12031,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12031,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12031,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12031,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12031,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12031,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12033,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12033,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12033,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12033,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12033,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12033,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12033,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12033,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12033,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12033,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12033,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12033,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12033,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12033,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12033,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12034,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12034,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12034,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12034,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12034,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12034,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12034,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12034,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12034,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12034,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12034,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12034,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12034,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12034,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12034,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12036,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12036,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12036,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12036,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12036,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 12036,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12036,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12036,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12036,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12037,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12037,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12037,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12037,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12037,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12037,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 12037,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12037,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12037,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12037,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12039,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12039,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12039,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12039,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12039,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 12039,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12039,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12039,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12039,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12039,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12039,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12040,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12040,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12040,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12040,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12040,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 12040,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12040,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12040,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12040,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12040,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12043,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12043,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12043,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12045,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12045,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12045,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12045,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12046,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12046,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12046,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12046,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12046,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12046,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12046,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12046,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12046,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12046,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12046,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12050,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12050,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12050,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12050,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12050,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12050,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12050,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12050,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12050,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12050,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12050,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12053,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12053,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12053,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12053,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 12053,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12053,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12053,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12055,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12055,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12055,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12055,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12055,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12055,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12055,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12055,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12059,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12059,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12059,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12059,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12059,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12060,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12060,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12060,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12060,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12060,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12060,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12060,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12060,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12062,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12062,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12062,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12062,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12062,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12062,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12062,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12062,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12062,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12062,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12062,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12062,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12062,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12062,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12065,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12065,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12065,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12065,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12065,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12065,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12065,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12065,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12065,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12065,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12065,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12065,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12067,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12067,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12067,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12067,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12067,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12067,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12074,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12074,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12074,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12074,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12075,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12075,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12075,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12075,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12075,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12075,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12077,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12077,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12077,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12077,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12077,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12077,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12081,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12081,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12081,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12081,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12081,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12081,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12082,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12082,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12082,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12082,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12082,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12082,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12083,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12083,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12083,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12083,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12083,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12083,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12083,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12084,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12084,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12084,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12084,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12084,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12084,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12084,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12085,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12085,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12085,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12085,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12085,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12085,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12085,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12089,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12089,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12089,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12089,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12089,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12091,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12091,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12091,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12091,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12091,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12091,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12092,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12092,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12092,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 12092,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12092,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12092,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12092,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12093,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12093,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12093,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12093,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12093,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12094,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12094,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12094,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12094,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12094,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12094,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12094,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12094,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12097,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12097,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12097,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12097,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12097,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12099,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12099,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12099,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12099,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12099,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12099,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12099,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12099,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12099,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12099,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12099,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12100,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12100,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12100,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12100,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12100,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12101,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12101,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12101,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12101,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12101,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12103,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12103,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12103,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12103,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12103,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12103,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12105,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12105,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12105,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12105,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12105,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12105,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12105,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12105,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12105,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12105,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12108,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12108,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12108,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12108,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12110,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12110,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12110,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12110,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12111,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12111,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12111,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12111,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12111,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12111,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12113,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12113,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12113,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12113,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12113,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12113,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12113,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12113,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12113,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12113,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12113,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12113,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12113,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12113,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12114,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12114,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12114,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12114,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12114,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12114,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12114,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12114,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12114,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12114,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12114,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12114,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12114,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12114,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12129,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12129,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12129,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12129,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12133,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12133,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12133,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12133,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12133,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12133,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12133,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12135,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12135,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12135,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12135,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12135,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12135,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12135,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12137,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12137,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12137,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12137,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12137,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12139,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12139,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 12139,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12139,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12139,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12139,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12139,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12139,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12142,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12142,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12142,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12143,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12143,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12143,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12143,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12143,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12144,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12144,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 12144,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12144,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12144,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 12144,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12144,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12144,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12144,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12144,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12144,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12145,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12145,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12145,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12145,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12145,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12147,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12147,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12148,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12148,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12148,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12149,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12149,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12149,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12149,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12149,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12149,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12149,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12149,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12149,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12149,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12149,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12150,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12150,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12150,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12150,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12150,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12150,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12150,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12150,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12150,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12150,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12150,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12154,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12154,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12154,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12154,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12154,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12156,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12156,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12156,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12156,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12156,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12161,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12161,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12161,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12161,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12161,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12161,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12162,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12162,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12162,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12162,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12162,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12162,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12162,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12162,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12162,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12162,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12162,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12164,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12164,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12164,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12164,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12164,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12165,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12165,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12165,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12165,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12165,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12165,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12165,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12165,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12165,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12167,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12167,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12167,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12167,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12167,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12167,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12167,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12167,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12167,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12169,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12169,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12169,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12169,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12169,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12169,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12169,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12169,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12169,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12170,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12170,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12170,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12170,
    CategoryName: "Representatives of Universe 7"
    },
    {
    CharacterId: 12170,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12170,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12170,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12170,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12170,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12170,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12170,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12170,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12170,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12172,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12172,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12172,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12172,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12172,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12172,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12172,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12172,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12172,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12178,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12178,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12178,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12178,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12178,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12178,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12178,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12178,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12178,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12178,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12178,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12181,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12181,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12181,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12181,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12181,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12185,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12185,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12185,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12185,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12187,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12187,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12187,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12187,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12187,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12187,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12187,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12188,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12188,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12188,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12190,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12190,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12190,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12190,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12190,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12192,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12192,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12192,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12192,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12192,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12192,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12192,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12192,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12192,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12192,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12192,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12194,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12194,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12194,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12194,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12194,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12194,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12194,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12194,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12194,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12196,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12196,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12196,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12196,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12196,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12197,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12197,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12197,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12197,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12197,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12198,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12198,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12198,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12198,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12198,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12198,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12198,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12198,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12199,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12199,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12199,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12199,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12199,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12199,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12199,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12199,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12200,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12200,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12200,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12201,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12201,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12201,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12201,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12201,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12201,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12201,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12201,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12202,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12202,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12202,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12202,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12202,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12202,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12204,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12204,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12204,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12204,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12204,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12204,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12206,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12206,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12206,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12206,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12206,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12206,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12206,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 12206,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12208,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12208,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12208,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12208,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12208,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12208,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12208,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12208,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12209,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12209,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12209,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12209,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12209,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12209,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12209,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12209,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12211,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12211,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12211,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12211,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12212,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12212,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12212,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12212,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12216,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12216,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12216,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12216,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12216,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12216,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12216,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12216,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12216,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12218,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12218,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12218,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12218,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12218,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12218,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12219,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12219,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12219,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12219,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12219,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12219,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12219,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12219,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12219,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12219,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12219,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12219,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12219,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12222,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12222,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12222,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12222,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12222,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12222,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 12222,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12231,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12231,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12231,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12231,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 12233,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12233,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12233,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12233,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12233,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12233,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12234,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12234,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12234,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12234,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12234,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12234,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12237,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12237,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12237,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12237,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12237,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12237,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12238,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12238,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12238,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12238,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12238,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12238,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12238,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12238,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12238,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12238,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12238,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12238,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12238,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12241,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12241,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12241,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12241,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12241,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12241,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12241,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12241,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12241,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12241,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12242,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12242,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12242,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12242,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12242,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12242,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12242,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12242,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12242,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12242,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12242,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12242,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12242,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12242,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12245,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12245,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12245,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 12245,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12245,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12245,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12245,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12245,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12245,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12245,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12245,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12247,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12247,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12247,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12247,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12247,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12247,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12247,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12247,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12247,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12247,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12258,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12258,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12258,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12258,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12259,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12259,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12259,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12259,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12259,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12262,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12262,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12262,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12262,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12262,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12262,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12262,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12262,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12262,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12262,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12262,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12262,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12262,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12262,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12262,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12263,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12263,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12263,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12263,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12263,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12263,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12263,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12263,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12263,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12263,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12263,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12263,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12263,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12263,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12263,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12263,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12265,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12265,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12265,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12265,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12265,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12265,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12265,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12265,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12265,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 12265,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12265,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12268,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12268,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12268,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12268,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12268,
    CategoryName: "Universe 11"
    },
    {
    CharacterId: 12268,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12270,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12270,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12270,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12270,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12270,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12270,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12270,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12270,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12270,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12270,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12272,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12272,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12274,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12274,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12274,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12274,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12274,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12274,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12274,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12274,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12274,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12274,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12274,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12274,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12274,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12275,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12275,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12275,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12275,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12275,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12275,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12275,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12275,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12275,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12275,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12275,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12275,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12275,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12277,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12277,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12277,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12277,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12277,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12277,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12277,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12277,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12277,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12278,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12278,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12278,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12278,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12278,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12278,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12278,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12278,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12278,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12278,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12280,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12280,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12280,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12280,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12280,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12280,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12281,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12281,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12281,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12281,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12281,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12281,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12283,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12283,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12283,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12283,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12283,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12283,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 12283,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12283,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12283,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12283,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12283,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12283,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12283,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12283,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12283,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12286,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12286,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12286,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 12286,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12286,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12286,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12288,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12288,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12288,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12288,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12288,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12288,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12288,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12293,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12293,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12293,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12293,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12294,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12294,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12294,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12294,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12294,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12300,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12300,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12300,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12300,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12300,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12303,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12303,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12303,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12303,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12303,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12303,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12303,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12304,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12304,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12304,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12304,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12304,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12304,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12304,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12304,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12304,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12306,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12306,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12306,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12306,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12306,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12306,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12306,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12306,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12308,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12308,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12308,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12308,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12309,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12309,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12309,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12309,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12311,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12311,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12311,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12311,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12311,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12311,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12311,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12311,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12311,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12311,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12311,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12316,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12316,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12317,
    CategoryName: "Universe Survival Saga"
    },
    {
    CharacterId: 12317,
    CategoryName: "Universe 6"
    },
    {
    CharacterId: 12317,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12317,
    CategoryName: "Rapid Growth"
    },
    {
    CharacterId: 12317,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12317,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12317,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12319,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12319,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12319,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12319,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12319,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12319,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12319,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12324,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12324,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12324,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12324,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12324,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12324,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12324,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12324,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12324,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12324,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12324,
    CategoryName: "Miraculous Awakening"
    },
    {
    CharacterId: 12324,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12324,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12324,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12326,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12326,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12326,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12326,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12326,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12326,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12326,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12326,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12327,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12327,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12327,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12327,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12327,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12327,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12327,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12328,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12328,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12328,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12328,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12328,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12328,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12328,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12328,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12328,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12328,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12328,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12329,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12329,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12329,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12329,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12329,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12329,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12329,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12329,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12329,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12329,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12330,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12330,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12330,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12330,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12330,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12330,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12330,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12330,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12330,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12330,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12331,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12331,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12331,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12331,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12331,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12331,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12331,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12331,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12331,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12331,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12333,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12333,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12333,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12333,
    CategoryName: "Dragon Ball Heroes"
    },
    {
    CharacterId: 12333,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12336,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12336,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12336,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12336,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12336,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12336,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12338,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12338,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12338,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12338,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12338,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12339,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12339,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12339,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12339,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12339,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12339,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12339,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12339,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12339,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12341,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12341,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12341,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12341,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12341,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12342,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12342,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12342,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12342,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12342,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12342,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12342,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12342,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12346,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12346,
    CategoryName: "Super Saiyan 3"
    },
    {
    CharacterId: 12346,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12346,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12346,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12346,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12346,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12346,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12346,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12346,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12346,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12346,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12346,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12346,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12349,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12349,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12349,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12349,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12349,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 12349,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12349,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12349,
    CategoryName: "Legendary Existence"
    },
    {
    CharacterId: 12349,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12349,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12349,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12349,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12351,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12351,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12351,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12351,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12351,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12351,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12351,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12351,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12351,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12351,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12351,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12352,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 12352,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12352,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12352,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12352,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12352,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12352,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12352,
    CategoryName: "Giant Ape Power"
    },
    {
    CharacterId: 12352,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12352,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12352,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12352,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12352,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12352,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12357,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12357,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12357,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12359,
    CategoryName: "Shadow Dragon Saga"
    },
    {
    CharacterId: 12359,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12359,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12361,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12361,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12361,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12361,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12361,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12361,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12361,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12361,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12361,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12361,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12361,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12362,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12362,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12362,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12362,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12362,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12362,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12362,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12362,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12362,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12362,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12362,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12362,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12363,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12363,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12363,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12363,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12363,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12363,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12363,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12363,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12363,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12364,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12364,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12364,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12364,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12364,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12365,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12365,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12365,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12365,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12366,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12366,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12366,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12366,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12367,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12367,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12367,
    CategoryName: "Majin Power"
    },
    {
    CharacterId: 12367,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12367,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12368,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12368,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12368,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12368,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12369,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12369,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12369,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12369,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12369,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12370,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12370,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12370,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12371,
    CategoryName: "Fusion"
    },
    {
    CharacterId: 12371,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12371,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12371,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12371,
    CategoryName: "Crossover"
    },
    {
    CharacterId: 12371,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12373,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12373,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 12373,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12373,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12373,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12373,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12373,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12375,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12375,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 12375,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12375,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12375,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12375,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12375,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12377,
    CategoryName: "Planet Namek Saga"
    },
    {
    CharacterId: 12377,
    CategoryName: "Ginyu Force"
    },
    {
    CharacterId: 12377,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12377,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12377,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12377,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12377,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12380,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12380,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12380,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12380,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12380,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12380,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12380,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12380,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12381,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12381,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12381,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12381,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12381,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12381,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12385,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12385,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12385,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12385,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12385,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12386,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12386,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12386,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12386,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12386,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12386,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12388,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12388,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12388,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12388,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12389,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12389,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12389,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12389,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12391,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12391,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12393,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12393,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12393,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12395,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12395,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12395,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12398,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12398,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12398,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12398,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12398,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12398,
    CategoryName: "Super Saiyan 2"
    },
    {
    CharacterId: 12398,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12398,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12398,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12398,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12398,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12398,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12398,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12401,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12401,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12401,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12401,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12401,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12401,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12402,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12402,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12402,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12402,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12402,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12402,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12404,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12404,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12404,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12404,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12406,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12406,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12406,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12406,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12406,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12406,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12408,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12408,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12408,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12408,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12409,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12409,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12409,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12409,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12409,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12409,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12409,
    CategoryName: "Time Limit"
    },
    {
    CharacterId: 12409,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12411,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12411,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12411,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12413,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12413,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12413,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12414,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12414,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12414,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12414,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12414,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12414,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12416,
    CategoryName: "World Tournament"
    },
    {
    CharacterId: 12416,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12416,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12416,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12416,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12416,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12417,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12417,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12417,
    CategoryName: "Giant Form"
    },
    {
    CharacterId: 12425,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12425,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12425,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12425,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12427,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12427,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12427,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12427,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12427,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12427,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12427,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12427,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12427,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12427,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12429,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12429,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12429,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12429,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12429,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12429,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12429,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12429,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12429,
    CategoryName: "Heavenly Events"
    },
    {
    CharacterId: 12429,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12429,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12429,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12429,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12432,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12432,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12432,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12432,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12432,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12432,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12432,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12432,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12434,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12434,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12434,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12434,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12434,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12434,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12435,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12435,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12435,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12435,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12435,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12435,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12435,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12438,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12438,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12438,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12438,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12438,
    CategoryName: "Androids/Cell Saga"
    },
    {
    CharacterId: 12438,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12438,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12438,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12438,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12438,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12438,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12444,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12444,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12444,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12444,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12444,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12444,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12444,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12444,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12444,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12444,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12444,
    CategoryName: "Power Beyond Super Saiyan"
    },
    {
    CharacterId: 12444,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12450,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12450,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12450,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12450,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12450,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12450,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12450,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12450,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12450,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12450,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12450,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12450,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12450,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12450,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12451,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12451,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12451,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12451,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12451,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12451,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12451,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12451,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12451,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12451,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12451,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12451,
    CategoryName: "Mastered Evolution"
    },
    {
    CharacterId: 12451,
    CategoryName: "Sworn Enemies"
    },
    {
    CharacterId: 12451,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12454,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12454,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12454,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12454,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12454,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12454,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12454,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12455,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12455,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12455,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12455,
    CategoryName: "Vegeta's Family"
    },
    {
    CharacterId: 12455,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12455,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12455,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12460,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12460,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12460,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12460,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12460,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12460,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12460,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12463,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12463,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12463,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12463,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12463,
    CategoryName: "Inhuman Deeds"
    },
    {
    CharacterId: 12463,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12463,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12465,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12465,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12465,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12465,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12465,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12465,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12465,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12465,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12466,
    CategoryName: "Realm of Gods"
    },
    {
    CharacterId: 12466,
    CategoryName: "Potara"
    },
    {
    CharacterId: 12466,
    CategoryName: "Future Saga"
    },
    {
    CharacterId: 12466,
    CategoryName: "Time Travelers"
    },
    {
    CharacterId: 12466,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12466,
    CategoryName: "Worldwide Chaos"
    },
    {
    CharacterId: 12466,
    CategoryName: "Battle of Fate"
    },
    {
    CharacterId: 12466,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12472,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12472,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12472,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12472,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12473,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12473,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12473,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12473,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12473,
    CategoryName: "Saiyan Saga"
    },
    {
    CharacterId: 12475,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12475,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12475,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12478,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12478,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12478,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12478,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12478,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12480,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12480,
    CategoryName: "Peppy Gals"
    },
    {
    CharacterId: 12480,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12480,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 12480,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12480,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12482,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12482,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12482,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12482,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12482,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12482,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12482,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12482,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12483,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12483,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12483,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12483,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12483,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12483,
    CategoryName: "Final Trump Card"
    },
    {
    CharacterId: 12483,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12483,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12484,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12484,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12484,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12484,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12484,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12484,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12484,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12484,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12484,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12485,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12485,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12485,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12485,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12485,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12485,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12485,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12485,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12485,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12486,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12486,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12486,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12486,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12486,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12486,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12486,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12486,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12486,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12486,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12486,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12486,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12488,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12488,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12488,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12488,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12489,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12489,
    CategoryName: "Full Power"
    },
    {
    CharacterId: 12489,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12489,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12489,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12489,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12489,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12492,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12492,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12492,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12492,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12492,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12492,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12492,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12492,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12492,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12493,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12493,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12493,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12493,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12493,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12493,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12493,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12493,
    CategoryName: "Power Absorption"
    },
    {
    CharacterId: 12493,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12493,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12493,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12495,
    CategoryName: "Namekians"
    },
    {
    CharacterId: 12495,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12495,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12495,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12495,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12495,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12495,
    CategoryName: "Gifted Warriors"
    },
    {
    CharacterId: 12495,
    CategoryName: "Fused Fighters"
    },
    {
    CharacterId: 12497,
    CategoryName: "Joined Forces"
    },
    {
    CharacterId: 12497,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12497,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12499,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12499,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12499,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12499,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12499,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12499,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12499,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12499,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12499,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12504,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12504,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12504,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12504,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12504,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12507,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12507,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12507,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12507,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12507,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12507,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12507,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12507,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12507,
    CategoryName: "Exploding Rage"
    },
    {
    CharacterId: 12507,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12507,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12509,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12509,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12509,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12509,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 12509,
    CategoryName: "All-Out Struggle"
    },
    {
    CharacterId: 12509,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12509,
    CategoryName: "Connected Hope"
    },
    {
    CharacterId: 12509,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12509,
    CategoryName: "Entrusted Will"
    },
    {
    CharacterId: 12509,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12511,
    CategoryName: "Hybrid Saiyans"
    },
    {
    CharacterId: 12511,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12511,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12511,
    CategoryName: "Youth"
    },
    {
    CharacterId: 12511,
    CategoryName: "Bond of Master and Disciple"
    },
    {
    CharacterId: 12511,
    CategoryName: "Powerful Comeback"
    },
    {
    CharacterId: 12511,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12511,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12513,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12513,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12513,
    CategoryName: "Goku's Family"
    },
    {
    CharacterId: 12513,
    CategoryName: "Super Saiyans"
    },
    {
    CharacterId: 12513,
    CategoryName: "Kamehameha"
    },
    {
    CharacterId: 12513,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12513,
    CategoryName: "Turtle School"
    },
    {
    CharacterId: 12513,
    CategoryName: "GT Heroes"
    },
    {
    CharacterId: 12513,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12513,
    CategoryName: "Bond of Parent and Child"
    },
    {
    CharacterId: 12514,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12514,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12514,
    CategoryName: "GT Bosses"
    },
    {
    CharacterId: 12521,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12521,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12521,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12521,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12521,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12521,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12521,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12521,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12521,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12516,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12516,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12516,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12516,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12516,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12516,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12516,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12516,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12516,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12517,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12517,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12517,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12517,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12517,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12517,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12517,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12517,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12517,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12518,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12518,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12518,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12518,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12518,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12518,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12518,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12518,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12518,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12519,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12519,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12519,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12519,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12519,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12519,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12519,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12519,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12519,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12520,
    CategoryName: "Resurrected Warriors"
    },
    {
    CharacterId: 12520,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12520,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12520,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12520,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12520,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12520,
    CategoryName: "Revenge"
    },
    {
    CharacterId: 12520,
    CategoryName: "Corroded Body and Mind"
    },
    {
    CharacterId: 12520,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12521,
    CategoryName: "Movie Bosses"
    },
    {
    CharacterId: 12521,
    CategoryName: "Transformation Boost"
    },
    {
    CharacterId: 12521,
    CategoryName: "Wicked Bloodline"
    },
    {
    CharacterId: 12521,
    CategoryName: "Terrifying Conquerors"
    },
    {
    CharacterId: 12521,
    CategoryName: "Target: Goku"
    },
    {
    CharacterId: 12521,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12521,
    CategoryName: "Planetary Destruction"
    },
    {
    CharacterId: 12523,
    CategoryName: "Majin Buu Saga"
    },
    {
    CharacterId: 12523,
    CategoryName: "Siblings' Bond"
    },
    {
    CharacterId: 12523,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12525,
    CategoryName: "Dragon Ball Seekers"
    },
    {
    CharacterId: 12525,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12525,
    CategoryName: "DB Saga"
    },
    {
    CharacterId: 12525,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12525,
    CategoryName: "Earthlings"
    },
    {
    CharacterId: 12525,
    CategoryName: "Bond of Friendship"
    },
    {
    CharacterId: 12547,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12547,
    CategoryName: "Otherworld Warriors"
    },
    {
    CharacterId: 12547,
    CategoryName: "Saviors"
    },
    {
    CharacterId: 12547,
    CategoryName: "Battle of Wits"
    },
    {
    CharacterId: 12547,
    CategoryName: "Storied Figures"
    },
    {
    CharacterId: 12551,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12551,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12551,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12551,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12551,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12551,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12551,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12553,
    CategoryName: "Androids"
    },
    {
    CharacterId: 12553,
    CategoryName: "Movie Heroes"
    },
    {
    CharacterId: 12553,
    CategoryName: "Artificial Life Forms"
    },
    {
    CharacterId: 12553,
    CategoryName: "Worthy Rivals"
    },
    {
    CharacterId: 12553,
    CategoryName: "Special Pose"
    },
    {
    CharacterId: 12553,
    CategoryName: "Defenders of Justice"
    },
    {
    CharacterId: 12553,
    CategoryName: "Accelerated Battle"
    },
    {
    CharacterId: 12567,
    CategoryName: "Low-Class Warrior"
    },
    {
    CharacterId: 12567,
    CategoryName: "Pure Saiyans"
    },
    {
    CharacterId: 12567,
    CategoryName: "Team Bardock"
    },
    {
    CharacterId: 12567,
    CategoryName: "Space-Traveling Warriors"
    },
    {
    CharacterId: 12567,
    CategoryName: "Storied Figures"
    },
]

//TODO: trying to get all categories

const seedCharacterCategories = async () => {
  for (let i = 0; i < CharacterCategoryData.length; i++) {
    const selectedChar = await Character.findByPk(CharacterCategoryData[i].CharacterId);
    await selectedChar.addCategory(CharacterCategoryData[i].CategoryName);
  }
};


module.exports = seedCharacterCategories;
