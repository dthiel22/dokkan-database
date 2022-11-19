const { Character, Link } = require("../models");

const CharacterLinkData = [
  {
    CharacterId: 1321,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1321,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1321,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1321,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1321,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1321,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1331,
    LinkName: "Majin"
    },
    {
    CharacterId: 1331,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1331,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 1331,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1331,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1331,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1331,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1321,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1321,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1321,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1321,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1321,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1321,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1331,
    LinkName: "Majin"
    },
    {
    CharacterId: 1331,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1331,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 1331,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1331,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1331,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1331,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1376,
    LinkName: "Revival"
    },
    {
    CharacterId: 1376,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1376,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1376,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1376,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 1376,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 1376,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1380,
    LinkName: "Hardened Grudge"
    },
    {
    CharacterId: 1380,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1380,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1380,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1380,
    LinkName: "Berserker"
    },
    {
    CharacterId: 1380,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1425,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1425,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1425,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1425,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1425,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1425,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1425,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1439,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1439,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1439,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1439,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 1439,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1439,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 1439,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1465,
    LinkName: "Revival"
    },
    {
    CharacterId: 1465,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1465,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1465,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1465,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 1465,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 1465,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1488,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1488,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1488,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 1488,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1488,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1488,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1500,
    LinkName: "Majin"
    },
    {
    CharacterId: 1500,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1500,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 1500,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1500,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1500,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1500,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1503,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1503,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1503,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1503,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1503,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1503,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1503,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 1505,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1505,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1505,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1505,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1505,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1505,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1505,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1528,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1528,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1528,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1528,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1528,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1528,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1531,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1531,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 1531,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1531,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 1531,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1531,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1532,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1532,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 1532,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1532,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 1532,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1532,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1539,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1539,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1539,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1539,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 1539,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1539,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1540,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1540,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1540,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1540,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1540,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1540,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1544,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1544,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1544,
    LinkName: "Berserker"
    },
    {
    CharacterId: 1544,
    LinkName: "Revival"
    },
    {
    CharacterId: 1544,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1544,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1554,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 1554,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1554,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1554,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1554,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1554,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1554,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1555,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1555,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1555,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1555,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1555,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1555,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1555,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1558,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 1558,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1558,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1558,
    LinkName: "Namekians"
    },
    {
    CharacterId: 1558,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 1558,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 1558,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1566,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1566,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1566,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1566,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1566,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 1566,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1566,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1567,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1567,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1567,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1567,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1567,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 1567,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1567,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1573,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1573,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1573,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1573,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1573,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1573,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1574,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1574,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1574,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1574,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1574,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1574,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1574,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1575,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 1575,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 1575,
    LinkName: "Majin"
    },
    {
    CharacterId: 1575,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1575,
    LinkName: "GT"
    },
    {
    CharacterId: 1575,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1575,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1580,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 1580,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1580,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1580,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1580,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1580,
    LinkName: "GT"
    },
    {
    CharacterId: 1580,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1602,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1602,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1602,
    LinkName: "Coward"
    },
    {
    CharacterId: 1602,
    LinkName: "GT"
    },
    {
    CharacterId: 1602,
    LinkName: "Hatred of Saiyans"
    },
    {
    CharacterId: 1602,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1602,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1621,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1621,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1621,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1621,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1621,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1621,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1633,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1633,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1633,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1633,
    LinkName: "GT"
    },
    {
    CharacterId: 1633,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 1633,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1666,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1666,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1666,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1666,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1666,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1666,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1667,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1667,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1667,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1667,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1667,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1667,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 1667,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1669,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1669,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1669,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1669,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1669,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1669,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1670,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1670,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1670,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1670,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1670,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1670,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1674,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1674,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1674,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1674,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1674,
    LinkName: "GT"
    },
    {
    CharacterId: 1674,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1674,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1677,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1677,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1677,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1677,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1677,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1677,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1679,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1679,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1679,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1679,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1679,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1679,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1679,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1710,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 1710,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1710,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1710,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1710,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 1710,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1710,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1712,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1712,
    LinkName: "Revival"
    },
    {
    CharacterId: 1712,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 1712,
    LinkName: "Majin"
    },
    {
    CharacterId: 1712,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1712,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1712,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1714,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1714,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1714,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 1714,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 1714,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 1714,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1714,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1718,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 1718,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1718,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1718,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1718,
    LinkName: "GT"
    },
    {
    CharacterId: 1718,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1718,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1719,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1719,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1719,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1719,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1719,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1719,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1719,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1732,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1732,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 1732,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 1732,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 1732,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1732,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1734,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1734,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 1734,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 1734,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 1734,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1739,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1739,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1739,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1739,
    LinkName: "Revival"
    },
    {
    CharacterId: 1739,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1739,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1739,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1746,
    LinkName: "Hardened Grudge"
    },
    {
    CharacterId: 1746,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1746,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1746,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1746,
    LinkName: "Berserker"
    },
    {
    CharacterId: 1746,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1746,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId:  1747,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId:  1747,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId:  1747,
    LinkName: "Kamehameha"
    },
    {
    CharacterId:  1747,
    LinkName: "The First Awakened"
    },
    {
    CharacterId:  1747,
    LinkName: "Family Ties"
    },
    {
    CharacterId:  1747,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 1761,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1761,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1761,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1761,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1761,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1761,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1761,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1774,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1774,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1774,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1774,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1774,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 1774,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1774,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1781,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1781,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1781,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1781,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 1781,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 1784,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1784,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1784,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1784,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1784,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1784,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1797,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1797,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 1797,
    LinkName: "Strength in Unity"
    },
    {
    CharacterId: 1797,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 1797,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 1797,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1797,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1798,
    LinkName: "Revival"
    },
    {
    CharacterId: 1798,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 1798,
    LinkName: "Strength in Unity"
    },
    {
    CharacterId: 1798,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 1798,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 1798,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1798,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1803,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1803,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1803,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1803,
    LinkName: "Xenoverse"
    },
    {
    CharacterId: 1803,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1803,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1807,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 1807,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 1807,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 1807,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1807,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1807,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 1807,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1808,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1808,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1808,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1808,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1808,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1808,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1809,
    LinkName: "Majin"
    },
    {
    CharacterId: 1809,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1809,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1809,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1809,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1809,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1809,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1813,
    LinkName: "Majin"
    },
    {
    CharacterId: 1813,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1813,
    LinkName: "Berserker"
    },
    {
    CharacterId: 1813,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1813,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1813,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1813,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1842,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1842,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1842,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1842,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1842,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1842,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 1842,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1843,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1843,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 1843,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1843,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1843,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1843,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1851,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1851,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1851,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1851,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1851,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 1851,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 1853,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1853,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1853,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1853,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1853,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1853,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1853,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1854,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1854,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1854,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1854,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1854,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1854,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1855,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1855,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1855,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1855,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1855,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1855,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1856,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1856,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1856,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1856,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1856,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 1856,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1857,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1857,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1857,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1857,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1857,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1857,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1857,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1858,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1858,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1858,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1858,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1858,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1858,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1861,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1861,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1861,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1861,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1861,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1861,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1861,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1862,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1862,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1862,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1862,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1862,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1862,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1862,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1863,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1863,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1863,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1863,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1863,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1863,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1863,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1864,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1864,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1864,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1864,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1864,
    LinkName: "Destroyer of the Universe"
    },
    {
    CharacterId: 1864,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1871,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1871,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1871,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1871,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1871,
    LinkName: "GT"
    },
    {
    CharacterId: 1871,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 1871,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1874,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1874,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1874,
    LinkName: "Revival"
    },
    {
    CharacterId: 1874,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1874,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1874,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1874,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1875,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1875,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1875,
    LinkName: "Revival"
    },
    {
    CharacterId: 1875,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1875,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1875,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1875,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1879,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 1879,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1879,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 1879,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1879,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1879,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1880,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 1880,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1880,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 1880,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1880,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1880,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1880,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 1882,
    LinkName: "Revival"
    },
    {
    CharacterId: 1882,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1882,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1882,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1882,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1882,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1882,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1885,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1885,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1885,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1885,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1885,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1885,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1885,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1887,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1887,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1887,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1887,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1887,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1887,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1887,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1889,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1889,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1889,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1889,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1889,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 1889,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1889,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1892,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1892,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1892,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1892,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1892,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1892,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1893,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1893,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1893,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1893,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1893,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1893,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1894,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 1894,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1894,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1894,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1894,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1894,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1896,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1896,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 1896,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1896,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1896,
    LinkName: "Revival"
    },
    {
    CharacterId: 1896,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 1896,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1898,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1898,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 1898,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1898,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1898,
    LinkName: "Revival"
    },
    {
    CharacterId: 1898,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1898,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 1900,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1900,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 1900,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1900,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1900,
    LinkName: "Revival"
    },
    {
    CharacterId: 1900,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 1900,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1909,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1909,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1909,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1909,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1909,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1909,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1909,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1910,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1910,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1910,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1910,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1910,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1910,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1910,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1911,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1911,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1911,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1911,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1911,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1911,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1913,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 1913,
    LinkName: "Flee"
    },
    {
    CharacterId: 1913,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 1913,
    LinkName: "Patrol"
    },
    {
    CharacterId: 1913,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 1913,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1913,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1922,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 1922,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1922,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 1922,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 1922,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1922,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1923,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 1923,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1923,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 1923,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 1923,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1923,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 1923,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 1924,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1924,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1924,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1924,
    LinkName: "Berserker"
    },
    {
    CharacterId: 1924,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1924,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1925,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1925,
    LinkName: "GT"
    },
    {
    CharacterId: 1925,
    LinkName: "Infighter"
    },
    {
    CharacterId: 1925,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1925,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1925,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1926,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1926,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1926,
    LinkName: "GT"
    },
    {
    CharacterId: 1926,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1926,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 1926,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1926,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1933,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1933,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1933,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1933,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1933,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1933,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1933,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1935,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1935,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1935,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1935,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1935,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1935,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1935,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1937,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1937,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 1937,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 1937,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1937,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1937,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId:  1938,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId:  1938,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId:  1938,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId:  1938,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId:  1938,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId:  1938,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId:  1938,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 1943,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1943,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 1943,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1943,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1943,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1943,
    LinkName: "GT"
    },
    {
    CharacterId: 1943,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1948,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1948,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1948,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1948,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 1948,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1948,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1948,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1950,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1950,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1950,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1950,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1950,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1950,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1950,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 1951,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1951,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1951,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1951,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1951,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1951,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1951,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1952,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 1952,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1952,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1952,
    LinkName: "Revival"
    },
    {
    CharacterId: 1952,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 1952,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 1952,
    LinkName: "Formidable Enemy"
    },
    {
    CharacterId: 1958,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1958,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1958,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1958,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1958,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1958,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1958,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1959,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1959,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1959,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1959,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1959,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1959,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1959,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1962,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 1962,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1962,
    LinkName: "Respect"
    },
    {
    CharacterId: 1962,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 1962,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 1963,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 1963,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1963,
    LinkName: "Respect"
    },
    {
    CharacterId: 1963,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 1963,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 1963,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1963,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 1964,
    LinkName: "Majin"
    },
    {
    CharacterId: 1964,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1964,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 1964,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1964,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1964,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1964,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1966,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1966,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1966,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 1966,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1966,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 1966,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1970,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1970,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1970,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1970,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1970,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1970,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1970,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1971,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1971,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1971,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1971,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1971,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1971,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1971,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1972,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1972,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1972,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1972,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1972,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1972,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1972,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1973,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1973,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1973,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1973,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1973,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1973,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1973,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1974,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1974,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 1974,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1974,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 1974,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 1974,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1974,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1977,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1977,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1977,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1977,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1977,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1977,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 1977,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1978,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1978,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 1978,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1978,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1978,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 1978,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1978,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1979,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1979,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1979,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1979,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1979,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1979,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 1979,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1983,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1983,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 1983,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1983,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1983,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 1983,
    LinkName: "GT"
    },
    {
    CharacterId: 1983,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1986,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1986,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1986,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1986,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1986,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 1986,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1986,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 1988,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1988,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1988,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1988,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1988,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1988,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 1988,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1989,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1989,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1989,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1989,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 1989,
    LinkName: "Revival"
    },
    {
    CharacterId: 1989,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1989,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1990,
    LinkName: "Majin"
    },
    {
    CharacterId: 1990,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 1990,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1990,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 1990,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1990,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 1990,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1991,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 1991,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1991,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 1991,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1991,
    LinkName: "GT"
    },
    {
    CharacterId: 1991,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1992,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1992,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1992,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1992,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 1992,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1992,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1993,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 1993,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1993,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 1993,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 1993,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1993,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 1993,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1994,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1994,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1994,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1994,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1994,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1994,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1995,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 1995,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1995,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 1995,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 1995,
    LinkName: "GT"
    },
    {
    CharacterId: 1995,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1995,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1996,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 1996,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 1996,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 1996,
    LinkName: "Revival"
    },
    {
    CharacterId: 1996,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 1996,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1997,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 1997,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 1997,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 1997,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 1997,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 1997,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1998,
    LinkName: "Destroyer of the Universe"
    },
    {
    CharacterId: 1998,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 1998,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 1998,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 1998,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 1998,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 1998,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11000,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11000,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11000,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11000,
    LinkName: "GT"
    },
    {
    CharacterId: 11000,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11000,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11000,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11002,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11002,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11002,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11002,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11002,
    LinkName: "GT"
    },
    {
    CharacterId: 11002,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11002,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11003,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11003,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11003,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11003,
    LinkName: "GT"
    },
    {
    CharacterId: 11003,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11003,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11003,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11006,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11006,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11006,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11006,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11006,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11006,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11006,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11007,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11007,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11007,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11007,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11007,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11007,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11007,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11016,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11016,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11016,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11016,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11016,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11016,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11016,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11025,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11025,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11025,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11025,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11025,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11025,
    LinkName: "Revival"
    },
    {
    CharacterId: 11025,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11026,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11026,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11026,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11026,
    LinkName: "Revival"
    },
    {
    CharacterId: 11026,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11026,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11026,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11027,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11027,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11027,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11027,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11027,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11027,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11029,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11029,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11029,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11029,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11029,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11029,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11029,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11030,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11030,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11030,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11030,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11030,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11030,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11030,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11031,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11031,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11031,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11031,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11031,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11031,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11031,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11032,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11032,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11032,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11032,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11032,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11032,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11032,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11033,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11033,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11033,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11033,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11033,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11033,
    LinkName: "Scientist"
    },
    {
    CharacterId: 11033,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11036,
    LinkName: "Courage"
    },
    {
    CharacterId: 11036,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11036,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11036,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11036,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11036,
    LinkName: "GT"
    },
    {
    CharacterId: 11036,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11041,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11041,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11041,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11041,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11041,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11041,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11043,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11043,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11043,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11043,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11043,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11043,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11044,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11044,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11044,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11044,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11044,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11044,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11044,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11045,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 11045,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 11045,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11045,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11045,
    LinkName: "Coward"
    },
    {
    CharacterId: 11045,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11045,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11046,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 11046,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 11046,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11046,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11046,
    LinkName: "Coward"
    },
    {
    CharacterId: 11046,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11046,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11048,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11048,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11048,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11048,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11048,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11048,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11048,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11049,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11049,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11049,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11049,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11049,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11049,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11049,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11050,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11050,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11050,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11050,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11050,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11050,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11056,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11056,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11056,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11056,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11056,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11056,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11056,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11057,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11057,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11057,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11057,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11057,
    LinkName: "Golden Z-Fighter"
    },
    {
    CharacterId: 11057,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11057,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11058,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11058,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11058,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11058,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11058,
    LinkName: "Golden Z-Fighter"
    },
    {
    CharacterId: 11058,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11058,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11061,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11061,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11061,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11061,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11061,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11061,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 11061,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11062,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 11062,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11062,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11062,
    LinkName: "Revival"
    },
    {
    CharacterId: 11062,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11062,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 11062,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11066,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11066,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11066,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11066,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11066,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11066,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 11066,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11071,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11071,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11071,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11071,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11071,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11071,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11071,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11072,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11072,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11072,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11072,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11072,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11072,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11072,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11073,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11073,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11073,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11073,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11073,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11073,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11073,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11074,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11074,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11074,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11074,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11074,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11074,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11074,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11075,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11075,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11075,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11075,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11075,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11075,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11075,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11077,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11077,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11077,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11077,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11077,
    LinkName: "GT"
    },
    {
    CharacterId: 11077,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11077,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11080,
    LinkName: "RR Army"
    },
    {
    CharacterId: 11080,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11080,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11080,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11080,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11080,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11080,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11079,
    LinkName: "RR Army"
    },
    {
    CharacterId: 11079,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11079,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11079,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11079,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11079,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11079,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11083,
    LinkName: "Majin"
    },
    {
    CharacterId: 11083,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11083,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11083,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11083,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11083,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11083,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11085,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11085,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11085,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11085,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11085,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11085,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11085,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11087,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11087,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11087,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11087,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11087,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11087,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11087,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11089,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11089,
    LinkName: "Hero"
    },
    {
    CharacterId: 11089,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11089,
    LinkName: "Champion's Strength"
    },
    {
    CharacterId: 11089,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11089,
    LinkName: "Golden Z-Fighter"
    },
    {
    CharacterId: 11089,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11090,
    LinkName: "Hero"
    },
    {
    CharacterId: 11090,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11090,
    LinkName: "Golden Z-Fighter"
    },
    {
    CharacterId: 11090,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11090,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11090,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11090,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11094,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11094,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11094,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11094,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11094,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11094,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11094,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11095,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11095,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11095,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11095,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11095,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11095,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11095,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11096,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11096,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11096,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11096,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11096,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11096,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11096,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11097,
    LinkName: "High Compatibility"
    },
    {
    CharacterId: 11097,
    LinkName: "Courage"
    },
    {
    CharacterId: 11097,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11097,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11097,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11097,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11097,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11098,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11098,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11098,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11098,
    LinkName: "Majin Resurrection Plan"
    },
    {
    CharacterId: 11098,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11098,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11098,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11099,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11099,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11099,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11099,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11099,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11099,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11099,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11104,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11104,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11104,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11104,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11104,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11104,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 11104,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11106,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11106,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11106,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11106,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11106,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11106,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11106,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11107,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11107,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11107,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11107,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11107,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11107,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11107,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11108,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11108,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11108,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11108,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11108,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11108,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11108,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11110,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11110,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11110,
    LinkName: "Strength in Unity"
    },
    {
    CharacterId: 11110,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11110,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11110,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11113,
    LinkName: "Fear and Faith"
    },
    {
      CharacterId: 11113,
      LinkName: "Nightmare"
    },
    {
    CharacterId: 11113,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11113,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11113,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11113,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11114,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11114,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11114,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11114,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11114,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11114,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11114,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11115,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11115,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11115,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11115,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11115,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11115,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11115,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11117,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11117,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11117,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11117,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11117,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11117,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11117,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11118,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11118,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11118,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11118,
    LinkName: "Hardened Grudge"
    },
    {
    CharacterId: 11118,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11118,
    LinkName: "Formidable Enemy"
    },
    {
    CharacterId: 11118,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11119,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11119,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11119,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11119,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11119,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11119,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11119,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11121,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11121,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11121,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11121,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11121,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11121,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11121,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11130,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11130,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11130,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11130,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11130,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11130,
    LinkName: "GT"
    },
    {
    CharacterId: 11130,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11132,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11132,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11132,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11132,
    LinkName: "GT"
    },
    {
    CharacterId: 11132,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11132,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 11132,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11134,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11134,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11134,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11134,
    LinkName: "GT"
    },
    {
    CharacterId: 11134,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11134,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11134,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11137,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11137,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11137,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11137,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11137,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11137,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11137,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11138,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11138,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11138,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11138,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11138,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11138,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11138,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11139,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11139,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11139,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11139,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11139,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11139,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11139,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11143,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11143,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11143,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11143,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11143,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11143,
    LinkName: "Scientist"
    },
    {
    CharacterId: 11143,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11144,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11144,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11144,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11144,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11144,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11144,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11144,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11145,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 11145,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11145,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11145,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11145,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11145,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11145,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11146,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 11146,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11146,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11146,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11146,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11146,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11146,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11147,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11147,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11147,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11147,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11147,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11147,
    LinkName: "Xenoverse"
    },
    {
    CharacterId: 11147,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11163,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11163,
    LinkName: "Flee"
    },
    {
    CharacterId: 11163,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11163,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 11163,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11163,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11164,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11164,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11164,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11164,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11164,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11164,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11164,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11168,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11168,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11168,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11168,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11168,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11168,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11168,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11171,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11171,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11171,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11171,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11171,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11171,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11172,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11172,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11172,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11172,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11172,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11172,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11172,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11178,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11178,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11178,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11178,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11178,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11178,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11178,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11180,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11180,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11180,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11180,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11180,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11180,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11180,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11185,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11185,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11185,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11185,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11185,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11185,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11185,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11190,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11190,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11190,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11190,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11190,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11190,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11190,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11200,
    LinkName: "Majin"
    },
    {
    CharacterId: 11200,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11200,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11200,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11200,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11200,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11200,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11203,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11203,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11203,
    LinkName: "Revival"
    },
    {
    CharacterId: 11203,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11203,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11203,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11203,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11210,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11210,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11210,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11210,
    LinkName: "GT"
    },
    {
    CharacterId: 11210,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11210,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11210,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11212,
    LinkName: "Crane School"
    },
    {
    CharacterId: 11212,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 11212,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 11212,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11212,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11212,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11213,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11213,
    LinkName: "Crane School"
    },
    {
    CharacterId: 11213,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 11213,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 11213,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11213,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11213,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11215,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 11215,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 11215,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11215,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11215,
    LinkName: "Revival"
    },
    {
    CharacterId: 11215,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11216,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 11216,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 11216,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11216,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11216,
    LinkName: "Revival"
    },
    {
    CharacterId: 11216,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11216,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11233,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11233,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11233,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11233,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11233,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11233,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11233,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11236,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11236,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11236,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11236,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11236,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11236,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11236,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11238,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11238,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11238,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11238,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11238,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11238,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11238,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11239,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11239,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11239,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11239,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11239,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11239,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11240,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11240,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11240,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11240,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11240,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11240,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11240,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11246,
    LinkName: "Hero"
    },
    {
    CharacterId: 11246,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11246,
    LinkName: "Courage"
    },
    {
    CharacterId: 11246,
    LinkName: "Revival"
    },
    {
    CharacterId: 11246,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11246,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11246,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11268,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11268,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11268,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11268,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11268,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11268,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11268,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11270,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11270,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11270,
    LinkName: "Coward"
    },
    {
    CharacterId: 11270,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11270,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11270,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11270,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11272,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11272,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11272,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11272,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11272,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11272,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11272,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11274,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11274,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11274,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11274,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11274,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11274,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11274,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11276,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11276,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11276,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11276,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11276,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11276,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11276,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11277,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11277,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11277,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11277,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11277,
    LinkName: "GT"
    },
    {
    CharacterId: 11277,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11277,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11278,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11278,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11278,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11278,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11278,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11278,
    LinkName: "GT"
    },
    {
    CharacterId: 11278,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11289,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11289,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11289,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11289,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11289,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11289,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11290,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11290,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11290,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11290,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11290,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11290,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11290,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11292,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11292,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11292,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11292,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11292,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11292,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11293,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11293,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11293,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11293,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11293,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11293,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11293,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11296,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11296,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11296,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11296,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11296,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11296,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11296,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11299,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11299,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11299,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11299,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11299,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11299,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11299,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11301,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11301,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11301,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11301,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11301,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11301,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11303,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11303,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11303,
    LinkName: "Tag Team of Terror"
    },
    {
    CharacterId: 11303,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11303,
    LinkName: "Flee"
    },
    {
    CharacterId: 11303,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11305,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11305,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11305,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11305,
    LinkName: "Tag Team of Terror"
    },
    {
    CharacterId: 11305,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11305,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11307,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11307,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11307,
    LinkName: "Telekinesis"
    },
    {
    CharacterId: 11307,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11307,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11307,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11309,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11309,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11309,
    LinkName: "Respect"
    },
    {
    CharacterId: 11309,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11309,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11309,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11310,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 11310,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11310,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11310,
    LinkName: "Respect"
    },
    {
    CharacterId: 11310,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11310,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11310,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11311,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11311,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11311,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11311,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11311,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11311,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11311,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11316,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11316,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11316,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11316,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11316,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11316,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11316,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11321,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11321,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11321,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11321,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11321,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11321,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11321,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11330,
    LinkName: "Majin"
    },
    {
    CharacterId: 11330,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11330,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11330,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11330,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11330,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11330,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11332,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11332,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11332,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11332,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11332,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11332,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11334,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11334,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11334,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11334,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11334,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11334,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11334,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11338,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11338,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11338,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11338,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11338,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11338,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11339,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11339,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11339,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11339,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11339,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11339,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11339,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11341,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11341,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11341,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11341,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11341,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11341,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11341,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11342,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11342,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11342,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11342,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11342,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11342,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11342,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11343,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11343,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11343,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11343,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11343,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11343,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11343,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11353,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11353,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11353,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11353,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11353,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11353,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11353,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11354,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11354,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11354,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11354,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11354,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11354,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11354,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11357,
    LinkName: "Destroyer of the Universe"
    },
    {
    CharacterId: 11357,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11357,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11357,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11357,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11357,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11357,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11359,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11359,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11359,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11359,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11359,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11359,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11359,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11360,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11360,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11360,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11360,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11360,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11360,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11360,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11373,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11373,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11373,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11373,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11373,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11373,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11376,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11376,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11376,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11376,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11376,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11376,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11377,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11377,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11377,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11377,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11377,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11377,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11377,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11379,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11379,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11379,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11379,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11379,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11379,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11379,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11381,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11381,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11381,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11381,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11381,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11381,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11381,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11383,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11383,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11383,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11383,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11383,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11383,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11383,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11386,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11386,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11386,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11386,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11386,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11386,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11386,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11387,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11387,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11387,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11387,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11387,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11387,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11387,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11388,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11388,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11388,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11388,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11388,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11388,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11388,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11391,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11391,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11391,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11391,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11391,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11391,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11391,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11394,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11394,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11394,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11394,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11394,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11394,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11394,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11396,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11396,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11396,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11396,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11396,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11396,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11401,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11401,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11401,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11401,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11401,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11401,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11402,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11402,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11402,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11402,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11402,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11402,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11402,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11404,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11404,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11404,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11404,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11404,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11404,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11405,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11405,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11405,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11405,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11405,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11405,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11405,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11406,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11406,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11406,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11406,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11406,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11406,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11406,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11408,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11408,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11408,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11408,
    LinkName: "Courage"
    },
    {
    CharacterId: 11408,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11408,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11408,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11411,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11411,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11411,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11411,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11411,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11411,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11411,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11413,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11413,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11413,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11413,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11413,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11413,
    LinkName: "GT"
    },
    {
    CharacterId: 11413,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11414,
    LinkName: "Champion's Strength"
    },
    {
    CharacterId: 11414,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11414,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 11414,
    LinkName: "Courage"
    },
    {
    CharacterId: 11414,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11414,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11415,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11415,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11415,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11415,
    LinkName: "GT"
    },
    {
    CharacterId: 11415,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11415,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11415,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11416,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11416,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11416,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11416,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11416,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11416,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11417,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11417,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11417,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11417,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11417,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11417,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11418,
    LinkName: "Courage"
    },
    {
    CharacterId: 11418,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11418,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11418,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11418,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11418,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11418,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11419,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11419,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11419,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11419,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11419,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11419,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11421,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11421,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11421,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11421,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11421,
    LinkName: "GT"
    },
    {
    CharacterId: 11421,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11421,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11422,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11422,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11422,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11422,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11422,
    LinkName: "GT"
    },
    {
    CharacterId: 11422,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11422,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11433,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11433,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11433,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11433,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11433,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11433,
    LinkName: "GT"
    },
    {
    CharacterId: 11433,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11435,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11435,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11435,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11435,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11435,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11435,
    LinkName: "GT"
    },
    {
    CharacterId: 11435,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId:  11437,
    LinkName: "Z Fighters"
    },
    {
    CharacterId:  11437,
    LinkName: "All in the Family"
    },
    {
    CharacterId:  11437,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId:  11437,
    LinkName: "Kamehameha"
    },
    {
    CharacterId:  11437,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId:  11437,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId:  11437,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11439,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11439,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11439,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11439,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11439,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11439,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11439,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11446,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11446,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11446,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11446,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 11446,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11446,
    LinkName: "GT"
    },
    {
    CharacterId: 11446,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11447,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 11447,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11447,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11447,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11447,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11447,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11447,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11449,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11449,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11449,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11449,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11449,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11449,
    LinkName: "GT"
    },
    {
    CharacterId: 11449,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11450,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11450,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11450,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11450,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11450,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11450,
    LinkName: "Courage"
    },
    {
    CharacterId: 11450,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11451,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11451,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11451,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11451,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11451,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11451,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11451,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11464,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11464,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11464,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11464,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11464,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11464,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11464,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11466,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11466,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11466,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11466,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11466,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11466,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11466,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11468,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11468,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11468,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11468,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11468,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11468,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11468,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11471,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11471,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11471,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11471,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11471,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11471,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11471,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11472,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11472,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11472,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11472,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11472,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11472,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11472,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11474,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11474,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 11474,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11474,
    LinkName: "Revival"
    },
    {
    CharacterId: 11474,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11474,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11474,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11476,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11476,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11476,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11476,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11476,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11476,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11476,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11482,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11482,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11482,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11482,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11482,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11482,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11482,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11491,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11491,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11491,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11491,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11491,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11491,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11491,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11493,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11493,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11493,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11493,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11493,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11493,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11494,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11494,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11494,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11494,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11494,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11494,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11494,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11496,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11496,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11496,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11496,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11496,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11496,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11497,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11497,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11497,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11497,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11497,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11497,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11497,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11498,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11498,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11498,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11498,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11498,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11498,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11498,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId:  11499,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId:  11499,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId:  11499,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId:  11499,
    LinkName: "Prodigies"
    },
    {
    CharacterId:  11499,
    LinkName: "Nightmare"
    },
    {
    CharacterId:  11499,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId:  11499,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId:  11500,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId:  11500,
    LinkName: "Berserker"
    },
    {
    CharacterId:  11500,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId:  11500,
    LinkName: "The Innocents"
    },
    {
    CharacterId:  11500,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId:  11500,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId:  11500,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11502,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11502,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11502,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11502,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11502,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11502,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11503,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11503,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11503,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11503,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11503,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11503,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11503,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11505,
    LinkName: "Majin"
    },
    {
    CharacterId: 11505,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11505,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11505,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11505,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11505,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11505,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11510,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11510,
    LinkName: "Champion's Strength"
    },
    {
    CharacterId: 11510,
    LinkName: "Hero"
    },
    {
    CharacterId: 11510,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11510,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 11510,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11510,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11511,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11511,
    LinkName: "Revival"
    },
    {
    CharacterId: 11511,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11511,
    LinkName: "Majin"
    },
    {
    CharacterId: 11511,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11511,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11511,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11513,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11513,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11513,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 11513,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11513,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11513,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11513,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11514,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11514,
    LinkName: "Crane School"
    },
    {
    CharacterId: 11514,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11514,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11514,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11514,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11514,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11517,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11517,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11517,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11517,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11517,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11517,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11518,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11518,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11518,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11518,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11518,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11518,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11518,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11520,
    LinkName: "Telekinesis"
    },
    {
    CharacterId: 11520,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11520,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11520,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11520,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11520,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11520,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11521,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11521,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11521,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11521,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11521,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11521,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11521,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11522,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11522,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11522,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11522,
    LinkName: "Courage"
    },
    {
    CharacterId: 11522,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11522,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11522,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11523,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11523,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11523,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11523,
    LinkName: "GT"
    },
    {
    CharacterId: 11523,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11523,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11523,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11524,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11524,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11524,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 11524,
    LinkName: "GT"
    },
    {
    CharacterId: 11524,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 11524,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11524,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11525,
    LinkName: "Majin"
    },
    {
    CharacterId: 11525,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11525,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11525,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11525,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11525,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11525,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11526,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11526,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11526,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11526,
    LinkName: "Revival"
    },
    {
    CharacterId: 11526,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11526,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11526,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11529,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11529,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11529,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11529,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11529,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11529,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11529,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11531,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11531,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11531,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11531,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11531,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11531,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11531,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11541,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11541,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11541,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11541,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11541,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11541,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11541,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11542,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11542,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11542,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11542,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11542,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11542,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11542,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11547,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11547,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11547,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11547,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11547,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11547,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11547,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11556,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11556,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11556,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11556,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11556,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11556,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11557,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11557,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11557,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11557,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11557,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11557,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11557,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11559,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11559,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11559,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11559,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11559,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11559,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11561,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11561,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11561,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11561,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11561,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11561,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11565,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11565,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11565,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11565,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11565,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11565,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11565,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11567,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11567,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11567,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11567,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11567,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11567,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11567,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11575,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11575,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11575,
    LinkName: "GT"
    },
    {
    CharacterId: 11575,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11575,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11575,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11577,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11577,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11577,
    LinkName: "GT"
    },
    {
    CharacterId: 11577,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11577,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11577,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11579,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11579,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11579,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11579,
    LinkName: "Coward"
    },
    {
    CharacterId: 11579,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11579,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11579,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11581,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11581,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11581,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11581,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11581,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11581,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11581,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11584,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11584,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11584,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11584,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11584,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11584,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11584,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11587,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11587,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11587,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11587,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11587,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11587,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11587,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11588,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11588,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11588,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11588,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11588,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11588,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11588,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11589,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11589,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11589,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11589,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11589,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11589,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11589,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11590,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11590,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11590,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11590,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11590,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11590,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11590,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11591,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11591,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11591,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11591,
    LinkName: "GT"
    },
    {
    CharacterId: 11591,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11591,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11591,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11595,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11595,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11595,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11595,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11595,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11595,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11597,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11597,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11597,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11597,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11597,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11597,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11597,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11600,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11600,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11600,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11600,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11600,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11600,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11600,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11603,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11603,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11603,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11603,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11603,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11603,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11603,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11605,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11605,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11605,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11605,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11605,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11605,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11605,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11608,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11608,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11608,
    LinkName: "Hardened Grudge"
    },
    {
    CharacterId: 11608,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11608,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11608,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11608,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11610,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11610,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11610,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11610,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11610,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11610,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11610,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11612,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11612,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11612,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11612,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11612,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11612,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11612,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11615,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11615,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11615,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11615,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11615,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11615,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11615,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11620,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11620,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11620,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11620,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11620,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11620,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11620,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11623,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11623,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11623,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11623,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11623,
    LinkName: "Penguin Village Adventure"
    },
    {
    CharacterId: 11623,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11623,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11625,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11625,
    LinkName: "Flee"
    },
    {
    CharacterId: 11625,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11625,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11625,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11625,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11625,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11630,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11630,
    LinkName: "Flee"
    },
    {
    CharacterId: 11630,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11630,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 11630,
    LinkName: "GT"
    },
    {
    CharacterId: 11630,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11631,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11631,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11631,
    LinkName: "Majin"
    },
    {
    CharacterId: 11631,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11631,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11631,
    LinkName: "GT"
    },
    {
    CharacterId: 11631,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11636,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11636,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11636,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11636,
    LinkName: "GT"
    },
    {
    CharacterId: 11636,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11636,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11637,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11637,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11637,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11637,
    LinkName: "GT"
    },
    {
    CharacterId: 11637,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11637,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11637,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11639,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11639,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11639,
    LinkName: "Coward"
    },
    {
    CharacterId: 11639,
    LinkName: "GT"
    },
    {
    CharacterId: 11639,
    LinkName: "Hatred of Saiyans"
    },
    {
    CharacterId: 11639,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11644,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11644,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11644,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11644,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11644,
    LinkName: "GT"
    },
    {
    CharacterId: 11644,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11644,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11645,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11645,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11645,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11645,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11645,
    LinkName: "GT"
    },
    {
    CharacterId: 11645,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11645,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11646,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11646,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11646,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11646,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11646,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11646,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11646,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11649,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11649,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11649,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11649,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11649,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11649,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11649,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11651,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11651,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11651,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11651,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11651,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11651,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11651,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11657,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11657,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11657,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11657,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11657,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11657,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11657,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11658,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11658,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11658,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11658,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11658,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11658,
    LinkName: "GT"
    },
    {
    CharacterId: 11658,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11661,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11661,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11661,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11661,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11661,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11661,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11661,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11663,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11663,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 11663,
    LinkName: "Strength in Unity"
    },
    {
    CharacterId: 11663,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11663,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11663,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11663,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11665,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11665,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11665,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11665,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11665,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 11665,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11665,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11673,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11673,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11673,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11673,
    LinkName: "Coward"
    },
    {
    CharacterId: 11673,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11673,
    LinkName: "Hatred of Saiyans"
    },
    {
    CharacterId: 11673,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11674,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11674,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11674,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11674,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11674,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11674,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11674,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11675,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11675,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11675,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11675,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11675,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11675,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11675,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11676,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11676,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 11676,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11676,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11676,
    LinkName: "Scientist"
    },
    {
    CharacterId: 11676,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11676,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11677,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11677,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11677,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11677,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11677,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11677,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11677,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11678,
    LinkName: "Majin"
    },
    {
    CharacterId: 11678,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11678,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11678,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11678,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11678,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11678,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11680,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11680,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11680,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11680,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11680,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 11680,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11681,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11681,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11681,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11681,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11681,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 11681,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11681,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11683,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11683,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11683,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11683,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11683,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11683,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11684,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11684,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11684,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11684,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11684,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11684,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11684,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11686,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11686,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11686,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11686,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11686,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11686,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11687,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11687,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11687,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11687,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11687,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11687,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11687,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11690,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11690,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11690,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11690,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11690,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11690,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 11690,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11702,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11702,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11702,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11702,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11702,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11702,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11702,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11704,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11704,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11704,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11704,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11704,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11704,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11704,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11706,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11706,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11706,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11706,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11706,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11706,
    LinkName: "Courage"
    },
    {
    CharacterId: 11706,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11708,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11708,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11708,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11708,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11708,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11708,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11708,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11712,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11712,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11712,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11712,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11712,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11712,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11712,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11716,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11716,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11716,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11716,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11716,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11716,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11716,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11722,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11722,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11722,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11722,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11722,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11722,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11722,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11724,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11724,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11724,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11724,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11724,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11724,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11724,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11726,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11726,
    LinkName: "Courage"
    },
    {
    CharacterId: 11726,
    LinkName: "Hero"
    },
    {
    CharacterId: 11726,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11726,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11726,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11726,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11728,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11728,
    LinkName: "Hero"
    },
    {
    CharacterId: 11728,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11728,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11728,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11728,
    LinkName: "Respect"
    },
    {
    CharacterId: 11728,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11730,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11730,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11730,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11730,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11730,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11730,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11730,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11732,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11732,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11732,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11732,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11732,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11732,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11732,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11734,
    LinkName: "Flee"
    },
    {
    CharacterId: 11734,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11734,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11734,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11734,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11734,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11735,
    LinkName: "Flee"
    },
    {
    CharacterId: 11735,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11735,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11735,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 11735,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11735,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11735,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11737,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11737,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11737,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11737,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11737,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11737,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11737,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11738,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11738,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11738,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11738,
    LinkName: "Courage"
    },
    {
    CharacterId: 11738,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11738,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11738,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11741,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11741,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11741,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11741,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11741,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11741,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11741,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11742,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11742,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11742,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11742,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11742,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11742,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11742,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11743,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11743,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11743,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11743,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11743,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11743,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11743,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11744,
    LinkName: "Crane School"
    },
    {
    CharacterId: 11744,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 11744,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11744,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11744,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11744,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11744,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11747,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11747,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11747,
    LinkName: "Hero"
    },
    {
    CharacterId: 11747,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11747,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11747,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11747,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11749,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11749,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11749,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11749,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11749,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11749,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11749,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11751,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11751,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11751,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 11751,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11751,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11751,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11751,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11755,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11755,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11755,
    LinkName: "Courage"
    },
    {
    CharacterId: 11755,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11755,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 11755,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 11755,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11757,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 11757,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11757,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11757,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11757,
    LinkName: "Coward"
    },
    {
    CharacterId: 11757,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11757,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11759,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11759,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 11759,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11759,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11759,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11759,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11759,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11762,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11762,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11762,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11762,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11762,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11762,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11763,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11763,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11763,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11763,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11763,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11763,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11763,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11766,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11766,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11766,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11766,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11766,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11766,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11766,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11768,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11768,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11768,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11768,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11768,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11768,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11768,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11770,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11770,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11770,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11770,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 11770,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 11770,
    LinkName: "GT"
    },
    {
    CharacterId: 11770,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11772,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11772,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11772,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11772,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11772,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11772,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11772,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11774,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11774,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11774,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11774,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11774,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11774,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11774,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11777,
    LinkName: "Revival"
    },
    {
    CharacterId: 11777,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 11777,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11777,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11777,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11777,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11778,
    LinkName: "Revival"
    },
    {
    CharacterId: 11778,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11778,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11778,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11778,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11778,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11778,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11780,
    LinkName: "Crane School"
    },
    {
    CharacterId: 11780,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11780,
    LinkName: "Coward"
    },
    {
    CharacterId: 11780,
    LinkName: "Revival"
    },
    {
    CharacterId: 11780,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 11780,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11780,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11782,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11782,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11782,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11782,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11782,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11782,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11782,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11784,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11784,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11784,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11784,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11784,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11784,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 11784,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11789,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11789,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11789,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11789,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11789,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11789,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11790,
    LinkName: "Revival"
    },
    {
    CharacterId: 11790,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11790,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11790,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11790,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11790,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11790,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11793,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 11793,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11793,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11793,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11793,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11793,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11793,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11795,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 11795,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11795,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 11795,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11795,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11795,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11795,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11796,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11796,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11796,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11796,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11796,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11796,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11796,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11802,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11802,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11802,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11802,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11802,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11802,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11803,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 11803,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11803,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11803,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11803,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 11803,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11803,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11806,
    LinkName: "Cooler's Armored Squad"
    },
    {
    CharacterId: 11806,
    LinkName: "Cooler's Underling"
    },
    {
    CharacterId: 11806,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11806,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11806,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11806,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11806,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11810,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11810,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11810,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11810,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11810,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11810,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11810,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11812,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11812,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11812,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11812,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11812,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11812,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11812,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11815,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11815,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11815,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11815,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11815,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11815,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11815,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11819,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11819,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11819,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11819,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11819,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11819,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11819,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11822,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11822,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11822,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11822,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 11822,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11822,
    LinkName: "Courage"
    },
    {
    CharacterId: 11822,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11824,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11824,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11824,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11824,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11824,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11824,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11825,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11825,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11825,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11825,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11825,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11825,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11825,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11827,
    LinkName: "RR Army"
    },
    {
    CharacterId: 11827,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11827,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11827,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11827,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11827,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11827,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11830,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 11830,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11830,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11830,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11830,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11830,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 11830,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11832,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11832,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 11832,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11832,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11832,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11832,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11832,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11833,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11833,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11833,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11833,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11833,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11833,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11833,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11834,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11834,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11834,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11834,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11834,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11834,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11834,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11836,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11836,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11836,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11836,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11836,
    LinkName: "Telekinesis"
    },
    {
    CharacterId: 11836,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11836,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11840,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11840,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11840,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11840,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11840,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11840,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11840,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11841,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11841,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11841,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11841,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11841,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11841,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11841,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11848,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11848,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11848,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11848,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11848,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11848,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11849,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11849,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11849,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11849,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11849,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11849,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11849,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11850,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 11850,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11850,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11850,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11850,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11850,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11850,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11852,
    LinkName: "RR Army"
    },
    {
    CharacterId: 11852,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11852,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11852,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11852,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11852,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11852,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11854,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11854,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11854,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11854,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11854,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11854,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11854,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11856,
    LinkName: "RR Army"
    },
    {
    CharacterId: 11856,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11856,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11856,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11856,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11856,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11856,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11858,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11858,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11858,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11858,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11858,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11858,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11858,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11859,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11859,
    LinkName: "Majin Resurrection Plan"
    },
    {
    CharacterId: 11859,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11859,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11859,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11859,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11859,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11861,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11861,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11861,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11861,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11861,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11861,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11862,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11862,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11862,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11862,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11862,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11862,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11862,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11864,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11864,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11864,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11864,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11864,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11864,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11865,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11865,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11865,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11865,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11865,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11865,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11865,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11866,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11866,
    LinkName: "Revival"
    },
    {
    CharacterId: 11866,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11866,
    LinkName: "Majin"
    },
    {
    CharacterId: 11866,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11866,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11866,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11868,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11868,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 11868,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 11868,
    LinkName: "Majin Resurrection Plan"
    },
    {
    CharacterId: 11868,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11868,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11868,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11870,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11870,
    LinkName: "Evil Autocrats"
    },
    {
    CharacterId: 11870,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 11870,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11870,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11870,
    LinkName: "Coward"
    },
    {
    CharacterId: 11870,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11872,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11872,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11872,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11872,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11872,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11872,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11872,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11874,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11874,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11874,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11874,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 11874,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 11874,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11874,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11879,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11879,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11879,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11879,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 11879,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 11879,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11879,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11884,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11884,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11884,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11884,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11884,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11884,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11884,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11887,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11887,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11887,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11887,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11887,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11887,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11893,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11893,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11893,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11893,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11893,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11893,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11893,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11895,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11895,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11895,
    LinkName: "Frieza's Army"
    },
    {
    CharacterId: 11895,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11895,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11895,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11895,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11899,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11899,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11899,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11899,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11899,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11899,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11900,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11900,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11900,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11900,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11900,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11900,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11900,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11904,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11904,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11904,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11904,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11904,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11904,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11904,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11906,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11906,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11906,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11906,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11906,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11906,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11907,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11907,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11907,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11907,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11907,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11907,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11907,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11909,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11909,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11909,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11909,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11909,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11909,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11909,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11910,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11910,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11910,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11910,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11910,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 11910,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11910,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11914,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11914,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11914,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11914,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 11914,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 11914,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11914,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11917,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11917,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11917,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11917,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11917,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11917,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11917,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11920,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11920,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11920,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11920,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11920,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11920,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11920,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11922,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11922,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11922,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11922,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11922,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11922,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11922,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11924,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 11924,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11924,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 11924,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11924,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11924,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11924,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11926,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11926,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11926,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11926,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11926,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11926,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11926,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11928,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11928,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11928,
    LinkName: "Courage"
    },
    {
    CharacterId: 11928,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 11928,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11928,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11928,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11930,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11930,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11930,
    LinkName: "Coward"
    },
    {
    CharacterId: 11930,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11930,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11930,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11930,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11934,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11934,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11934,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11934,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11934,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11934,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11934,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11936,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11936,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11936,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11936,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11936,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11936,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11936,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11937,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11937,
    LinkName: "Revival"
    },
    {
    CharacterId: 11937,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11937,
    LinkName: "Majin"
    },
    {
    CharacterId: 11937,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11937,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11937,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11939,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11939,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11939,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11939,
    LinkName: "Berserker"
    },
    {
    CharacterId: 11939,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11939,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11940,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11940,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11940,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11940,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11940,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 11940,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11940,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11946,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11946,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11946,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11946,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11946,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11946,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11946,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11947,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 11947,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11947,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11947,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11947,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11947,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11947,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11949,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11949,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11949,
    LinkName: "Patrol"
    },
    {
    CharacterId: 11949,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 11949,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 11949,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11949,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11952,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11952,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11952,
    LinkName: "Courage"
    },
    {
    CharacterId: 11952,
    LinkName: "High Compatibility"
    },
    {
    CharacterId: 11952,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11952,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11953,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11953,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11953,
    LinkName: "Courage"
    },
    {
    CharacterId: 11953,
    LinkName: "High Compatibility"
    },
    {
    CharacterId: 11953,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11953,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11953,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11959,
    LinkName: "Majin"
    },
    {
    CharacterId: 11959,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 11959,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11959,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 11959,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 11959,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 11959,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11963,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 11963,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11963,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11963,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11963,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11963,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11963,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11966,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11966,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11966,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 11966,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11966,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11966,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11966,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11968,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11968,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 11968,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11968,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11968,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 11968,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11968,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11969,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11969,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11969,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11969,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11969,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11969,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11969,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11970,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11970,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11970,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11970,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11970,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11970,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11970,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11971,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11971,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11971,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11971,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 11971,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11971,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11971,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11972,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11972,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11972,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11972,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11972,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11972,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11972,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11974,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11974,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11974,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11974,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11974,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 11974,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11974,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11979,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11979,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11979,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11979,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 11979,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 11979,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11979,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11981,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11981,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11981,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11981,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11981,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11981,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11982,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11982,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11982,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11982,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11982,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11982,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11982,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11984,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11984,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11984,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 11984,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11984,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11984,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11984,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11985,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11985,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 11985,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 11985,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11985,
    LinkName: "Respect"
    },
    {
    CharacterId: 11985,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 11985,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11986,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11986,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11986,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11986,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11986,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 11986,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11986,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11987,
    LinkName: "Namekians"
    },
    {
    CharacterId: 11987,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11987,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 11987,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 11987,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11987,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 11987,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11988,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11988,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11988,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11988,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11988,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 11988,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11988,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11989,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11989,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11989,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11989,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11989,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 11989,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 11989,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11990,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 11990,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 11990,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11990,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11990,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 11990,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 11990,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11991,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11991,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11991,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11991,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11991,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11991,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11991,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 11992,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 11992,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11992,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 11992,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 11992,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11992,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11992,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11993,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 11993,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 11993,
    LinkName: "Infighter"
    },
    {
    CharacterId: 11993,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 11993,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 11993,
    LinkName: "Courage"
    },
    {
    CharacterId: 11993,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11995,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 11995,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 11995,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 11995,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 11995,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 11995,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 11995,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 11998,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11998,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11998,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11998,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 11998,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11998,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11999,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 11999,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 11999,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 11999,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 11999,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 11999,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 11999,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12001,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12001,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12001,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12001,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12001,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12001,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12001,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12003,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12003,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12003,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12003,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12003,
    LinkName: "Courage"
    },
    {
    CharacterId: 12003,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12003,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12004,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12004,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 12004,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12004,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12004,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12004,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12004,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12005,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12005,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12005,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12005,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12005,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12005,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12005,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12007,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12007,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 12007,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12007,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12007,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12007,
    LinkName: "Flee"
    },
    {
    CharacterId: 12007,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12009,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12009,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12009,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12009,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12009,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12009,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12009,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12011,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12011,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12011,
    LinkName: "Courage"
    },
    {
    CharacterId: 12011,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12011,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12011,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12011,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12013,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12013,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12013,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12013,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12013,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12013,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12013,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12015,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12015,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12015,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12015,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12015,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12015,
    LinkName: "Formidable Enemy"
    },
    {
    CharacterId: 12015,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12017,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12017,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12017,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12017,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12017,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12017,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12017,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12018,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12018,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12018,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12018,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12018,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12018,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12018,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12019,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12019,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12019,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12019,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12019,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12019,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12019,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12021,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12021,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12021,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12021,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12021,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12021,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12022,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12022,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12022,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12022,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12022,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12022,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12022,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12028,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12028,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12028,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12028,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12028,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12028,
    LinkName: "Courage"
    },
    {
    CharacterId: 12028,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12030,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12030,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12030,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12030,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12030,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12030,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12031,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12031,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12031,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12031,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12031,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12031,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12031,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12033,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12033,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12033,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12033,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12033,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12033,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12034,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12034,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12034,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12034,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12034,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12034,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12034,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12036,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12036,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12036,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12036,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12036,
    LinkName: "Majin"
    },
    {
    CharacterId: 12036,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12037,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12037,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12037,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12037,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12037,
    LinkName: "Majin"
    },
    {
    CharacterId: 12037,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12037,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12039,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12039,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12039,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12039,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 12039,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12039,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12039,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12040,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12040,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12040,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12040,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 12040,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12040,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12040,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12043,
    LinkName: "Hatred of Saiyans"
    },
    {
    CharacterId: 12043,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12043,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12043,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12043,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12043,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12043,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12045,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12045,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12045,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12045,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12045,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12045,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12046,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12046,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12046,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12046,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12046,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12046,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12046,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12050,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12050,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12050,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12050,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12050,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12050,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12050,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12053,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 12053,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12053,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12053,
    LinkName: "Majin"
    },
    {
    CharacterId: 12053,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12053,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12053,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12055,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12055,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12055,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12055,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12055,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12055,
    LinkName: "Scientist"
    },
    {
    CharacterId: 12055,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12059,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12059,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12059,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12059,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12059,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12059,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 12059,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12060,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12060,
    LinkName: "Ultimate Lifeform"
    },
    {
    CharacterId: 12060,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12060,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12060,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12060,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 12060,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12062,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12062,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12062,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12062,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12062,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12062,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12062,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12065,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12065,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12065,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12065,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12065,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12065,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 12065,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12067,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12067,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12067,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12067,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12067,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12067,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 12067,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12074,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12074,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12074,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12074,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12074,
    LinkName: "Destroyer of the Universe"
    },
    {
    CharacterId: 12074,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12075,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12075,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12075,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12075,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12075,
    LinkName: "Destroyer of the Universe"
    },
    {
    CharacterId: 12075,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12075,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12077,
    LinkName: "Majin"
    },
    {
    CharacterId: 12077,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12077,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 12077,
    LinkName: "Revival"
    },
    {
    CharacterId: 12077,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12077,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12077,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12081,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12081,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12081,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 12081,
    LinkName: "Revival"
    },
    {
    CharacterId: 12081,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12081,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12081,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12082,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12082,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12082,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12082,
    LinkName: "Revival"
    },
    {
    CharacterId: 12082,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12082,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12082,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12083,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12083,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12083,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12083,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12083,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12083,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12083,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12084,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12084,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12084,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12084,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12084,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12084,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12084,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12085,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12085,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12085,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12085,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12085,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12085,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12085,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12089,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12089,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12089,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12089,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12089,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12089,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12089,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12091,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12091,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12091,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12091,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12091,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12091,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12091,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12093,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12093,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12093,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12093,
    LinkName: "Scientist"
    },
    {
    CharacterId: 12093,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12093,
    LinkName: "Xenoverse"
    },
    {
    CharacterId: 12093,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12094,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12094,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12094,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12094,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12094,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12094,
    LinkName: "Xenoverse"
    },
    {
    CharacterId: 12094,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12097,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12097,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12097,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12097,
    LinkName: "GT"
    },
    {
    CharacterId: 12097,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 12097,
    LinkName: "Revival"
    },
    {
    CharacterId: 12097,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12099,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12099,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12099,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12099,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12099,
    LinkName: "GT"
    },
    {
    CharacterId: 12099,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12099,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12100,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12100,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12100,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12100,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12100,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12100,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12101,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12101,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12101,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12101,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12101,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12101,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12101,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12103,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 12103,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 12103,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12103,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12103,
    LinkName: "Revival"
    },
    {
    CharacterId: 12103,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12103,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12105,
    LinkName: "The Hera Clan"
    },
    {
    CharacterId: 12105,
    LinkName: "Galactic Warriors"
    },
    {
    CharacterId: 12105,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12105,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12105,
    LinkName: "Coward"
    },
    {
    CharacterId: 12105,
    LinkName: "Revival"
    },
    {
    CharacterId: 12105,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12108,
    LinkName: "New Frieza Army"
    },
    {
    CharacterId: 12108,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12108,
    LinkName: "Coward"
    },
    {
    CharacterId: 12108,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12108,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12108,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12108,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12110,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12110,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12110,
    LinkName: "Courage"
    },
    {
    CharacterId: 12110,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12110,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12110,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12111,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12111,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 12111,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12111,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12111,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12111,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12111,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12113,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12113,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12113,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 12113,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12113,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12113,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12114,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12114,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12114,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 12114,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12114,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12114,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12114,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12129,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12129,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12129,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12129,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12129,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12129,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12129,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12133,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12133,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12133,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12133,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12133,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12133,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 12133,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12135,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12135,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12135,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12135,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12135,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 12135,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12135,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12137,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12137,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12137,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12137,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 12137,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12137,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12137,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12142,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12142,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12142,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12142,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12142,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12142,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12143,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12143,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12143,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12143,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12143,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12143,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12143,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12145,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12145,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12145,
    LinkName: "Courage"
    },
    {
    CharacterId: 12145,
    LinkName: "High Compatibility"
    },
    {
    CharacterId: 12145,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12145,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12145,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12147,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12147,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 12147,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12147,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12147,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12147,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12148,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12148,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 12148,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12148,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12148,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12148,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12148,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12149,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12149,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12149,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12149,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12149,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12149,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12149,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12150,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12150,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12150,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12150,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12150,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12150,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 12150,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12154,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12154,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12154,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12154,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12154,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12154,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12154,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12156,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12156,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12156,
    LinkName: "Fusion Failure"
    },
    {
    CharacterId: 12156,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12156,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12156,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 12156,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12161,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12161,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12161,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12161,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12161,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12161,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12162,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12162,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12162,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12162,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12162,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12162,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12162,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12164,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12164,
    LinkName: "Courage"
    },
    {
    CharacterId: 12164,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12164,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12164,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12164,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12164,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12165,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12165,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12165,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12165,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12165,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12165,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 12165,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12167,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12167,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12167,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12167,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12167,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12167,
    LinkName: "Hardened Grudge"
    },
    {
    CharacterId: 12167,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12169,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12169,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12169,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12169,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12169,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 12169,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12169,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12170,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12170,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12170,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12170,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12170,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12170,
    LinkName: "The First Awakened"
    },
    {
    CharacterId: 12170,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12172,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 12172,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12172,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12172,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12172,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12172,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12172,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12178,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12178,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12178,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12178,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12178,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12178,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 12178,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12181,
    LinkName: "Courage"
    },
    {
    CharacterId: 12181,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 12181,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12181,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12181,
    LinkName: "Champion's Strength"
    },
    {
    CharacterId: 12181,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12181,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12185,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12185,
    LinkName: "Courage"
    },
    {
    CharacterId: 12185,
    LinkName: "Patrol"
    },
    {
    CharacterId: 12185,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12185,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12185,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12185,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12187,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12187,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12187,
    LinkName: "Courage"
    },
    {
    CharacterId: 12187,
    LinkName: "High Compatibility"
    },
    {
    CharacterId: 12187,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12187,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12187,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12188,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12188,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12188,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12188,
    LinkName: "GT"
    },
    {
    CharacterId: 12188,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 12188,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12188,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12190,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12190,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12190,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12190,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12190,
    LinkName: "Revival"
    },
    {
    CharacterId: 12190,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12190,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12192,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12192,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12192,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12192,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12192,
    LinkName: "GT"
    },
    {
    CharacterId: 12192,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12192,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12194,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12194,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12194,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12194,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12194,
    LinkName: "GT"
    },
    {
    CharacterId: 12194,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12194,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12196,
    LinkName: "Hero"
    },
    {
    CharacterId: 12196,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12196,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12196,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12196,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12196,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12197,
    LinkName: "Hero"
    },
    {
    CharacterId: 12197,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12197,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12197,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12197,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12197,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12197,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12198,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12198,
    LinkName: "GT"
    },
    {
    CharacterId: 12198,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12198,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12198,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12198,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 12198,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12199,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12199,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12199,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12199,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12199,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12199,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 12199,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12200,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12200,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12200,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12200,
    LinkName: "GT"
    },
    {
    CharacterId: 12200,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12200,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12200,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12201,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12201,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12201,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12201,
    LinkName: "World Tournament Champion"
    },
    {
    CharacterId: 12201,
    LinkName: "Money Money Money"
    },
    {
    CharacterId: 12201,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12201,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12202,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12202,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12202,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12202,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12202,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 12202,
    LinkName: "GT"
    },
    {
    CharacterId: 12202,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12204,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12204,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12204,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12204,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12204,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12204,
    LinkName: "GT"
    },
    {
    CharacterId: 12204,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12206,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 12206,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12206,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12206,
    LinkName: "Revival"
    },
    {
    CharacterId: 12206,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12206,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12206,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12208,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12208,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12208,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12208,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12208,
    LinkName: "GT"
    },
    {
    CharacterId: 12208,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12209,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12209,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12209,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12209,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12209,
    LinkName: "GT"
    },
    {
    CharacterId: 12209,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12209,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12211,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12211,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12211,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12211,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12211,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12211,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12212,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12212,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12212,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12212,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12212,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12212,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12212,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12216,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12216,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12216,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12216,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12216,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12216,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12216,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12218,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12218,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12218,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12218,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12218,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12218,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12219,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12219,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12219,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12219,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12219,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12219,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12219,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12222,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12222,
    LinkName: "Demonic Ways"
    },
    {
    CharacterId: 12222,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12222,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12222,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12222,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 12222,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12231,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12231,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12231,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12231,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12231,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12231,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12231,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12233,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12233,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12233,
    LinkName: "Coward"
    },
    {
    CharacterId: 12233,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12233,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 12233,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12234,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12234,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12234,
    LinkName: "Coward"
    },
    {
    CharacterId: 12234,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12234,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 12234,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12234,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12237,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12237,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12237,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 12237,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12237,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12237,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12238,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12238,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12238,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 12238,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12238,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12238,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12238,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12241,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12241,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12241,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12241,
    LinkName: "GT"
    },
    {
    CharacterId: 12241,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 12241,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12242,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12242,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12242,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12242,
    LinkName: "GT"
    },
    {
    CharacterId: 12242,
    LinkName: "Saiyan Roar"
    },
    {
    CharacterId: 12242,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12242,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12245,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12245,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12245,
    LinkName: "Namekians"
    },
    {
    CharacterId: 12245,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12245,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12245,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 12245,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12247,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12247,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12247,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12247,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12247,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12247,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12247,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12258,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12258,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12258,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12258,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12258,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12258,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12262,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12262,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12262,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12262,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12262,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12262,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12263,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12263,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12263,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12263,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12263,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12263,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12263,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12265,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12265,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12265,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12265,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12265,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12265,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12265,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12268,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12268,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12268,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12268,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12268,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12268,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12268,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12270,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 12270,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12270,
    LinkName: "Attack of the Clones"
    },
    {
    CharacterId: 12270,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12270,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12270,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12270,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12272,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12272,
    LinkName: "Flee"
    },
    {
    CharacterId: 12272,
    LinkName: "Coward"
    },
    {
    CharacterId: 12272,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12272,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12272,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12272,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12274,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12274,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12274,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12274,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12274,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12274,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12275,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12275,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12275,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12275,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12275,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12275,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12275,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12277,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12277,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12277,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12277,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12277,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12277,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12278,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12278,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12278,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12278,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12278,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12278,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12278,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12280,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12280,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12280,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12280,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12280,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12280,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12281,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12281,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12281,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12281,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12281,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12281,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12281,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12283,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12283,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12283,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12283,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 12283,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12283,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12283,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12286,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12286,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12286,
    LinkName: "Courage"
    },
    {
    CharacterId: 12286,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 12286,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12286,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12286,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12288,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12288,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12288,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12288,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12288,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12288,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12288,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12293,
    LinkName: "Courage"
    },
    {
    CharacterId: 12293,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12293,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12293,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12293,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12293,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12294,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12294,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12294,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12294,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12294,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12294,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12294,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12300,
    LinkName: "Frieza's Army"
    },
    {
    CharacterId: 12300,
    LinkName: "Frieza's Minion"
    },
    {
    CharacterId: 12300,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12300,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12300,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12300,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12300,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12303,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12303,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12303,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12303,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12303,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12303,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12304,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12304,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12304,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12304,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12304,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12304,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12304,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12306,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12306,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12306,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12306,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12306,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12306,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12306,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12308,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12308,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12308,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12308,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12308,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12308,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12309,
    LinkName: "Tournament of Power"
    },
    {
    CharacterId: 12309,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12309,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12309,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12309,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12309,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12309,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12311,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 12311,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12311,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12311,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12311,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12311,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12311,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12316,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12316,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12316,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12316,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12316,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12316,
    LinkName: "Courage"
    },
    {
    CharacterId: 12316,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12317,
    LinkName: "Supreme Warrior"
    },
    {
    CharacterId: 12317,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12317,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12317,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12317,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12317,
    LinkName: "Warriors of Universe 6"
    },
    {
    CharacterId: 12317,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12319,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12319,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12319,
    LinkName: "Revival"
    },
    {
    CharacterId: 12319,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12319,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12319,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12319,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12324,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 12324,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12324,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12324,
    LinkName: "Patrol"
    },
    {
    CharacterId: 12324,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12324,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12324,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12326,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12326,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12326,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12326,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12326,
    LinkName: "Patrol"
    },
    {
    CharacterId: 12326,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12326,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12327,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12327,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12327,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12327,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12327,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12327,
    LinkName: "Power Bestowed by God"
    },
    {
    CharacterId: 12327,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12328,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12328,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12328,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12328,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12328,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12328,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12328,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12329,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12329,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12329,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12329,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12329,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12329,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12329,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12330,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12330,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12330,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12330,
    LinkName: "Patrol"
    },
    {
    CharacterId: 12330,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12330,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12330,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12331,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12331,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12331,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12331,
    LinkName: "Patrol"
    },
    {
    CharacterId: 12331,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12331,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12331,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12333,
    LinkName: "Demonic Power"
    },
    {
    CharacterId: 12333,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12333,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12333,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12333,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12333,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12333,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12336,
    LinkName: "Organic Upgrade"
    },
    {
    CharacterId: 12336,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12336,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 12336,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12336,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12336,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12336,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12338,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12338,
    LinkName: "Energy Absorption"
    },
    {
    CharacterId: 12338,
    LinkName: "RR Army"
    },
    {
    CharacterId: 12338,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12338,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12338,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12338,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12339,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12339,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12339,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12339,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12339,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12339,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12339,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12341,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12341,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12341,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12341,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12341,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12341,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12342,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12342,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12342,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12342,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12342,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12342,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12342,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12346,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12346,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12346,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12346,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12346,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12346,
    LinkName: "Limit-Breaking Form"
    },
    {
    CharacterId: 12346,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12349,
    LinkName: "Majin"
    },
    {
    CharacterId: 12349,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12349,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12349,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12349,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 12349,
    LinkName: "The Wall Standing Tall"
    },
    {
    CharacterId: 12349,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12351,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12351,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12351,
    LinkName: "Over 9000"
    },
    {
    CharacterId: 12351,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12351,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12351,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12357,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12357,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12357,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12357,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12357,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12357,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12357,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12359,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12359,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12359,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12359,
    LinkName: "GT"
    },
    {
    CharacterId: 12359,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12359,
    LinkName: "Shadow Dragons"
    },
    {
    CharacterId: 12359,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12361,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12361,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12361,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12361,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12361,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12361,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12362,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12362,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12362,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12362,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12362,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12362,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12362,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12363,
    LinkName: "Messenger from the Future"
    },
    {
    CharacterId: 12363,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12363,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12363,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12363,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12363,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 12363,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12364,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12364,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12364,
    LinkName: "Dodon Ray"
    },
    {
    CharacterId: 12364,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12364,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12364,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12365,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12365,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12365,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12365,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12365,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12365,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12365,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12366,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12366,
    LinkName: "Connoisseur"
    },
    {
    CharacterId: 12366,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12366,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12366,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12366,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12366,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12367,
    LinkName: "Majin"
    },
    {
    CharacterId: 12367,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12367,
    LinkName: "Infinite Regeneration"
    },
    {
    CharacterId: 12367,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12367,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12367,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12367,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12368,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12368,
    LinkName: "Telekinesis"
    },
    {
    CharacterId: 12368,
    LinkName: "Courage"
    },
    {
    CharacterId: 12368,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 12368,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12368,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12368,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12369,
    LinkName: "Courage"
    },
    {
    CharacterId: 12369,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12369,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12369,
    LinkName: "Hero"
    },
    {
    CharacterId: 12369,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12369,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12370,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12370,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12370,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12370,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12370,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12370,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12371,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12371,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12371,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12371,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12371,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12371,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12371,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12373,
    LinkName: "Frieza's Army"
    },
    {
    CharacterId: 12373,
    LinkName: "Frieza's Minion"
    },
    {
    CharacterId: 12373,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 12373,
    LinkName: "Tag Team of Terror"
    },
    {
    CharacterId: 12373,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12373,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12373,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12375,
    LinkName: "Frieza's Army"
    },
    {
    CharacterId: 12375,
    LinkName: "Frieza's Minion"
    },
    {
    CharacterId: 12375,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 12375,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12375,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12375,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12375,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12377,
    LinkName: "Frieza's Army"
    },
    {
    CharacterId: 12377,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12377,
    LinkName: "Respect"
    },
    {
    CharacterId: 12377,
    LinkName: "The Ginyu Force"
    },
    {
    CharacterId: 12377,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12377,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12377,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12380,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12380,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12380,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12380,
    LinkName: "Budding Warrior"
    },
    {
    CharacterId: 12380,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12380,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12380,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12381,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12381,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12381,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12381,
    LinkName: "Twin Terrors"
    },
    {
    CharacterId: 12381,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12381,
    LinkName: "Infinite Energy"
    },
    {
    CharacterId: 12381,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12385,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12385,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12385,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12385,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12385,
    LinkName: "GT"
    },
    {
    CharacterId: 12385,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12386,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12386,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12386,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12386,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12386,
    LinkName: "GT"
    },
    {
    CharacterId: 12386,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12386,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12388,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12388,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12388,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12388,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12388,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12388,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12389,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12389,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12389,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12389,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12389,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12389,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12389,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12391,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12391,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 12391,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12391,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12391,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12391,
    LinkName: "Blazing Battle"
    },
    {
    CharacterId: 12391,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12393,
    LinkName: "Courage"
    },
    {
    CharacterId: 12393,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12393,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12393,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12393,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12393,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12393,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12395,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12395,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12395,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12395,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12395,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12395,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12395,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12398,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12398,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12398,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12398,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12398,
    LinkName: "Over in a Flash"
    },
    {
    CharacterId: 12398,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12398,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12401,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12401,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12401,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12401,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12401,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12401,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12401,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12402,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12402,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 12402,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12402,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12402,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 12402,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12402,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12404,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12404,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12404,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12404,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12404,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12404,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12404,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12406,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12406,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12406,
    LinkName: "Coward"
    },
    {
    CharacterId: 12406,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12406,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12406,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12406,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12408,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12408,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12408,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12408,
    LinkName: "Berserker"
    },
    {
    CharacterId: 12408,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12408,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12408,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12409,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12409,
    LinkName: "Turtle School"
    },
    {
    CharacterId: 12409,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12409,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12409,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12409,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12409,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12411,
    LinkName: "Flee"
    },
    {
    CharacterId: 12411,
    LinkName: "Telekinesis"
    },
    {
    CharacterId: 12411,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12411,
    LinkName: "Coward"
    },
    {
    CharacterId: 12411,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12411,
    LinkName: "GT"
    },
    {
    CharacterId: 12411,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12413,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12413,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12413,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12413,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12413,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12413,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12414,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12414,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12414,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12414,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12414,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12414,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12414,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12416,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12416,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12416,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12416,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12416,
    LinkName: "Supreme Power"
    },
    {
    CharacterId: 12416,
    LinkName: "World Tournament Reborn"
    },
    {
    CharacterId: 12416,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12425,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12425,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12425,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12425,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12425,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12425,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 12425,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12427,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12427,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 12427,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12427,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12427,
    LinkName: "Revival"
    },
    {
    CharacterId: 12427,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12427,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12429,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12429,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12429,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12429,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12429,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12429,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12429,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12432,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12432,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12432,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12432,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12432,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12432,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12432,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12434,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12434,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12434,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12434,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12434,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12434,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12435,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12435,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12435,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12435,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12435,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12435,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12435,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12444,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12444,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12444,
    LinkName: "Warrior Gods"
    },
    {
    CharacterId: 12444,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 12444,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 12444,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12444,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12450,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12450,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12450,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12450,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 12450,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 12450,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12451,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12451,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12451,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12451,
    LinkName: "Super-God Combat"
    },
    {
    CharacterId: 12451,
    LinkName: "Resurrection 'F'"
    },
    {
    CharacterId: 12451,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12451,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12454,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12454,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12454,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12454,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12454,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12454,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12455,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12455,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12455,
    LinkName: "Royal Lineage"
    },
    {
    CharacterId: 12455,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12455,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12455,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12455,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12460,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12460,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12460,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12460,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12460,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12460,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12460,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12463,
    LinkName: "Fear and Faith"
    },
    {
    CharacterId: 12463,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12463,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12463,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12463,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12463,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12463,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12465,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12465,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12465,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12465,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12465,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12465,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12466,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12466,
    LinkName: "Dismal Future"
    },
    {
    CharacterId: 12466,
    LinkName: "Godly Power"
    },
    {
    CharacterId: 12466,
    LinkName: "Fused Fighter"
    },
    {
    CharacterId: 12466,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12466,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12466,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12472,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12472,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12472,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12472,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 12472,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12472,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12473,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12473,
    LinkName: "Crane School"
    },
    {
    CharacterId: 12473,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12473,
    LinkName: "Telepathy"
    },
    {
    CharacterId: 12473,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12473,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12473,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12475,
    LinkName: "Flee"
    },
    {
    CharacterId: 12475,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12475,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12475,
    LinkName: "New Frieza Army"
    },
    {
    CharacterId: 12475,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12475,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12475,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12478,
    LinkName: "Speedy Retribution"
    },
    {
    CharacterId: 12478,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12478,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12478,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12478,
    LinkName: "GT"
    },
    {
    CharacterId: 12478,
    LinkName: "Courage"
    },
    {
    CharacterId: 12478,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12480,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 12480,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12480,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12480,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12480,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12480,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12480,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12482,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12482,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12482,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12482,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12482,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12482,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12483,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12483,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12483,
    LinkName: "Universe's Most Malevolent"
    },
    {
    CharacterId: 12483,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12483,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12483,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12483,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12484,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12484,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12484,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12484,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12484,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12485,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12485,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12485,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12485,
    LinkName: "Z Fighters"
    },
    {
    CharacterId: 12485,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12485,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12486,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12486,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12486,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12486,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12486,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12486,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12486,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12488,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12488,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12488,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12488,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12488,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12488,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12489,
    LinkName: "Golden Warrior"
    },
    {
    CharacterId: 12489,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12489,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12489,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12489,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12489,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12489,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12492,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12492,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12492,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12492,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12492,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12492,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12493,
    LinkName: "Big Bad Bosses"
    },
    {
    CharacterId: 12493,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12493,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12493,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12493,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12493,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12493,
    LinkName: "Legendary Power"
    },
    {
    CharacterId: 12495,
    LinkName: "Brainiacs"
    },
    {
    CharacterId: 12495,
    LinkName: "Prodigies"
    },
    {
    CharacterId: 12495,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12495,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12495,
    LinkName: "Namekians"
    },
    {
    CharacterId: 12495,
    LinkName: "Gaze of Respect"
    },
    {
    CharacterId: 12495,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12497,
    LinkName: "Courage"
    },
    {
    CharacterId: 12497,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12497,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12497,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12497,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12497,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12497,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12499,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12499,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12499,
    LinkName: "Battlefield Diva"
    },
    {
    CharacterId: 12499,
    LinkName: "GT"
    },
    {
    CharacterId: 12499,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12499,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12499,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12504,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12504,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12504,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12504,
    LinkName: "Tough as Nails"
    },
    {
    CharacterId: 12504,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12504,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12504,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12507,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12507,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12507,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12507,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12507,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12507,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12507,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12509,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12509,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12509,
    LinkName: "Family Ties"
    },
    {
    CharacterId: 12509,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 12509,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12509,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12509,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12511,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12511,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12511,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12511,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12511,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12511,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12511,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12513,
    LinkName: "All in the Family"
    },
    {
    CharacterId: 12513,
    LinkName: "Super Saiyan"
    },
    {
    CharacterId: 12513,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12513,
    LinkName: "Kamehameha"
    },
    {
    CharacterId: 12513,
    LinkName: "GT"
    },
    {
    CharacterId: 12513,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12513,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12514,
    LinkName: "Loyalty"
    },
    {
    CharacterId: 12514,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12514,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12514,
    LinkName: "GT"
    },
    {
    CharacterId: 12514,
    LinkName: "Mechanical Menaces"
    },
    {
    CharacterId: 12514,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12514,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12521,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12521,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12521,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12521,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12521,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12521,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12521,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12516,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12516,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12516,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12516,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12516,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12516,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12516,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12517,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12517,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12517,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12517,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12517,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12517,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12517,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12518,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12518,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12518,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12518,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12518,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12518,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12518,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12519,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12519,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12519,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12519,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12519,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12519,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12519,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12520,
    LinkName: "Auto Regeneration"
    },
    {
    CharacterId: 12520,
    LinkName: "Fusion"
    },
    {
    CharacterId: 12520,
    LinkName: "Deficit Boost"
    },
    {
    CharacterId: 12520,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12520,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12520,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12520,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12521,
    LinkName: "Strongest Clan in Space"
    },
    {
    CharacterId: 12521,
    LinkName: "Thirst for Conquest"
    },
    {
    CharacterId: 12521,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12521,
    LinkName: "Brutal Beatdown"
    },
    {
    CharacterId: 12521,
    LinkName: "Nightmare"
    },
    {
    CharacterId: 12521,
    LinkName: "Metamorphosis"
    },
    {
    CharacterId: 12521,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12523,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12523,
    LinkName: "More Than Meets the Eye"
    },
    {
    CharacterId: 12523,
    LinkName: "Gentleman"
    },
    {
    CharacterId: 12523,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12523,
    LinkName: "Master of Magic"
    },
    {
    CharacterId: 12523,
    LinkName: "Otherworld Warriors"
    },
    {
    CharacterId: 12523,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12525,
    LinkName: "Flee"
    },
    {
    CharacterId: 12525,
    LinkName: "Infighter"
    },
    {
    CharacterId: 12525,
    LinkName: "Solid Support"
    },
    {
    CharacterId: 12525,
    LinkName: "The Incredible Adventure"
    },
    {
    CharacterId: 12525,
    LinkName: "Guidance of the Dragon Balls"
    },
    {
    CharacterId: 12525,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12547,
    LinkName: "Experienced Fighters"
    },
    {
    CharacterId: 12547,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12547,
    LinkName: "Bombardment"
    },
    {
    CharacterId: 12547,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12547,
    LinkName: "Super Strike"
    },
    {
    CharacterId: 12547,
    LinkName: "Soul vs Soul"
    },
    {
    CharacterId: 12547,
    LinkName: "Shattering the Limit"
    },
    {
    CharacterId: 12551,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12551,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12551,
    LinkName: "RR Army"
    },
    {
    CharacterId: 12551,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12551,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12551,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12551,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12553,
    LinkName: "The Innocents"
    },
    {
    CharacterId: 12553,
    LinkName: "Android Assault"
    },
    {
    CharacterId: 12553,
    LinkName: "RR Army"
    },
    {
    CharacterId: 12553,
    LinkName: "Shocking Speed"
    },
    {
    CharacterId: 12553,
    LinkName: "Hero of Justice"
    },
    {
    CharacterId: 12553,
    LinkName: "Signature Pose"
    },
    {
    CharacterId: 12553,
    LinkName: "Fierce Battle"
    },
    {
    CharacterId: 12567,
    LinkName: "Team Bardock"
    },
    {
    CharacterId: 12567,
    LinkName: "Saiyan Warrior Race"
    },
    {
    CharacterId: 12567,
    LinkName: "Saiyan Pride"
    },
    {
    CharacterId: 12567,
    LinkName: "The Saiyan Lineage"
    },
    {
    CharacterId: 12567,
    LinkName: "Cold Judgment"
    },
    {
    CharacterId: 12567,
    LinkName: "Prepared for Battle"
    },
    {
    CharacterId: 12567,
    LinkName: "Fierce Battle"
    },
    
]

//TODO: trying to get all links

const seedCharacterLinks = async () => {
  for (let i = 0; i < CharacterLinkData.length; i++) {
    const selectedChar = await Character.findByPk(CharacterLinkData[i].CharacterId);
    await selectedChar.addLink(CharacterLinkData[i].LinkName);
  }
};


module.exports = seedCharacterLinks;
