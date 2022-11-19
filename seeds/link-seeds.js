const { Link } = require("../models");

const linkData = [
    {
        name: "High Compatibility",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Courage",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK +10%",
        },
        {
        name: "The Students",
        lvl1_stats: "DEF +20%",
        lvl10_stats: "DEF +30%",
        },
        {
        name: "The Innocents",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Crane School",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Demonic Ways",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Demonic Power",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +20% and DEF +10%",
        },
        {
        name: "Brainiacs",
        lvl1_stats: "ATK & DEF +10%",
        lvl10_stats: "ATK & DEF +15%",
        },
        {
        name: "Golden Warrior",
        lvl1_stats: "All enemies' DEF -5% and Ki +1",
        lvl10_stats: "All enemies' DEF -10% and Ki +1",
        },
        {
        name: "Money Money Money",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Evil Autocrats",
        lvl1_stats: "Ki +1",
        lvl10_stats: "All enemies' DEF -20% and Ki +2",
        },
        {
        name: "Flee",
        lvl1_stats: "Ki +1 when HP is 30% or less",
        lvl10_stats: "Ki +2 and chance of evading enemy's attack (including Super Attack) +10% when HP is 50% or less",
        },
        {
        name: "Telekinesis",
        lvl1_stats: "All enemies' DEF -10%",
        lvl10_stats: "All enemies' DEF -20%",
        },
        {
        name: "More Than Meets the Eye",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK & DEF +10%",
        },
        {
        name: "Hero",
        lvl1_stats: "DEF +20%",
        lvl10_stats: "DEF +25%",
        },
        {
        name: "Supreme Warrior",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK +10%",
        },
        {
        name: "Gentleman",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +10%",
        },
        {
        name: "Brutal Beatdown",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Messenger from the Future",
        lvl1_stats: "ATK +5%",
        lvl10_stats: "ATK +10%",
        },
        {
        name: "World Tournament Reborn",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "New",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK & DEF +20%",
        },
        {
        name: "Saiyan Warrior Race",
        lvl1_stats: "ATK +5%",
        lvl10_stats: "ATK +10%",
        },
        {
        name: "All in the Family",
        lvl1_stats: "DEF +15%",
        lvl10_stats: "DEF +20%",
        },
        {
        name: "Telepathy",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of performing a critical hit +5%",
        },
        {
        name: "Respect",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Prodigies",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "World Tournament Champion",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and DEF +10%",
        },
        {
        name: "Metamorphosis",
        lvl1_stats: "Recovers 5% HP",
        lvl10_stats: "Recovers 5% HP and ATK & DEF +10%",
        },
        {
        name: "Super Saiyan",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Experienced Fighters",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Twin Terrors",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK, DEF & chance of evading enemy's attack (including Super Attack) +5%",
        },
        {
        name: "Coward",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of performing a critical hit +5%",
        },
        {
        name: "Attack of the Clones",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of evading enemy's attack (including Super Attack) +5%",
        },
        {
        name: "The Saiyan Lineage",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK & DEF +5%",
        },
        {
        name: "Android Assault",
        lvl1_stats: "DEF +10%",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Turtle School",
        lvl1_stats: "ATK & DEF +10%",
        lvl10_stats: "Ki +2 and ATK & DEF +20%",
        },
        {
        name: "Solid Support",
        lvl1_stats: "ATK +10% and all enemies' DEF -15%",
        lvl10_stats: "ATK +15% and all enemies' DEF -20%",
        },
        {
        name: "Mechanical Menaces",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and reduces damage received by 5%",
        },
        {
        name: "Cold Judgment",
        lvl1_stats: "DEF +20%",
        lvl10_stats: "DEF +25%",
        },
        {
        name: "Royal Lineage",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK +5%",
        },
        {
        name: "The Ginyu Force",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK +25% and chance of performing a critical hit +5%",
        },
        {
        name: "Infighter",
        lvl1_stats: "ATK +10% and all enemies' DEF -10%",
        lvl10_stats: "ATK +15% and all enemies' DEF -15%",
        },
        {
        name: "Frieza's Minion",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +20% and DEF +10%",
        },
        {
        name: "Champion's Strength",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and reduces damage received by 5%",
        },
        {
        name: "Z Fighters",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Dodon Ray",
        lvl1_stats: "ATK +10% when performing a Super Attack",
        lvl10_stats: "ATK +15% when performing a Super Attack",
        },
        {
        name: "Kamehameha",
        lvl1_stats: "ATK +5% when performing a Super Attack",
        lvl10_stats: "ATK +10% when performing a Super Attack",
        },
        {
        name: "Namekians",
        lvl1_stats: "Recovers 5% HP",
        lvl10_stats: "Recovers 7% HP and ATK & DEF +7%",
        },
        {
        name: "Berserker",
        lvl1_stats: "ATK +20% when HP is 50% or less",
        lvl10_stats: "ATK +30% when HP is 50% or less",
        },
        {
        name: "Big Bad Bosses",
        lvl1_stats: "ATK & DEF +25% when HP is 80% or less",
        lvl10_stats: "ATK & DEF +25%",
        },
        {
        name: "Frieza's Army",
        lvl1_stats: "DEF +20%",
        lvl10_stats: "ATK +10% and DEF +20%",
        },
        {
        name: "Tough as Nails",
        lvl1_stats: "DEF +15%",
        lvl10_stats: "DEF +20% and reduces damage received by 5%",
        },
        {
        name: "Speedy Retribution",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15% and chance of evading enemy's attack (including Super Attack) +5%",
        },
        {
        name: "Tag Team of Terror",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "RR Army",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK & DEF +10%",
        },
        {
        name: "Gaze of Respect",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Bombardment",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Over 9000",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK & DEF +10%",
        },
        {
        name: "Universe's Most Malevolent",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Shocking Speed",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +5%",
        },
        {
        name: "Family Ties",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK +10%",
        },
        {
        name: "Team Bardock",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Saiyan Pride",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Battlefield Diva",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and chance of evading enemy's attack (including Super Attack) +5%",
        },
        {
        name: "Revival",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2; ATK & DEF +5% and recovers 5% HP when HP is 50% or less",
        },
        {
        name: "Dismal Future",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of performing a critical hit +5%",
        },
        {
        name: "Organic Upgrade",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK, DEF & chance of performing a critical hit +5%",
        },
        {
        name: "Resurrection 'F'",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "Ki +1 and ATK & DEF +10%",
        },
        {
        name: "Patrol",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Warrior Gods",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +10%; plus an additional ATK +5% when performing a Super Attack",
        },
        {
        name: "Super-God Combat",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "New Frieza Army",
        lvl1_stats: "ATK & DEF +20%",
        lvl10_stats: "ATK & DEF +25%",
        },
        {
        name: "Loyalty",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and reduces damage received by 5%",
        },
        {
        name: "Unbreakable Bond",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Galactic Visitor",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Master of Magic",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +15% and all enemies' DEF -10%",
        },
        {
        name: "Majin Resurrection Plan",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Connoisseur",
        lvl1_stats: "Recovers 5% HP",
        lvl10_stats: "Recovers 7% HP and DEF +7%",
        },
        {
        name: "Godly Power",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +15% and chance of performing a critical hit +5%",
        },
        {
        name: "Energy Absorption",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and recovers 3% HP",
        },
        {
        name: "Budding Warrior",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Majin",
        lvl1_stats: "ATK & DEF +10%",
        lvl10_stats: "Ki +2 and ATK & DEF +15%",
        },
        {
        name: "Strength in Unity",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and recovers 3% HP",
        },
        {
        name: "Strongest Clan in Space",
        lvl1_stats: "Ki +2",
        lvl10_stats: "All enemies' DEF -10% and Ki +2",
        },
        {
        name: "Thirst for Conquest",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK & DEF +15%",
        },
        {
        name: "The Hera Clan",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & chance of performing a critical hit +5%",
        },
        {
        name: "Galactic Warriors",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "Ki +2 and ATK & DEF +20%",
        },
        {
        name: "Over in a Flash",
        lvl1_stats: "Ki +3",
        lvl10_stats: "Ki +3 and ATK +7%",
        },
        {
        name: "The Incredible Adventure",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and ATK & DEF +7%",
        },
        {
        name: "Cooler's Underling",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of performing a critical hit +5%",
        },
        {
        name: "Cooler's Armored Squad",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK & DEF +25%",
        },
        {
        name: "Hero of Justice",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK +25% and chance of performing a critical hit +5%",
        },
        {
        name: "Signature Pose",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and ATK +7%",
        },
        {
        name: "GT",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Infinite Regeneration",
        lvl1_stats: "Recovers 3% HP",
        lvl10_stats: "Ki +2, recovers 3% HP and DEF +10%",
        },
        {
        name: "Prepared for Battle",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +5%",
        },
        {
        name: "Destroyer of the Universe",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK +25% and DEF +15%",
        },
        {
        name: "Team Turles",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and chance of performing a critical hit +5%",
        },
        {
        name: "Fortuneteller Baba's Fighter",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and ATK & DEF +5%",
        },
        {
        name: "Guidance of the Dragon Balls",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +20% and chance of performing a critical hit +7%",
        },
        {
        name: "Power Bestowed by God",
        lvl1_stats: "ATK +5% when performing a Super Attack",
        lvl10_stats: "ATK +10% when performing a Super Attack",
        },
        {
        name: "Hardened Grudge",
        lvl1_stats: "Ki +1",
        lvl10_stats: "Ki +2 and ATK +10%",
        },
        {
        name: "Auto Regeneration",
        lvl1_stats: "Recovers 3% HP",
        lvl10_stats: "Recovers 5% HP and reduces damage received by 5%",
        },
        {
        name: "Fusion",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +10%",
        },
        {
        name: "Deficit Boost",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Ultimate Lifeform",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2, recovers 3% HP and ATK & DEF +10%",
        },
        {
        name: "Fierce Battle",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Infinite Energy",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK, DEF & chance of performing a critical hit +5%",
        },
        {
        name: "Formidable Enemy",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Fused Fighter",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +5%",
        },
        {
        name: "Fusion Failure",
        lvl1_stats: "Recovers 3% HP",
        lvl10_stats: "Recovers 7% HP",
        },
        {
        name: "Scientist",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and DEF +20%",
        },
        {
        name: "Hatred of Saiyans",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and ATK +10%",
        },
        {
        name: "Limit-Breaking Form",
        lvl1_stats: "ATK +5% when performing a Super Attack",
        lvl10_stats: "ATK +10% when performing a Super Attack",
        },
        {
        name: "The First Awakened",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK +25% and DEF +10%",
        },
        {
        name: "Shattering the Limit",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +5%",
        },
        {
        name: "Nightmare",
        lvl1_stats: "ATK +10%",
        lvl10_stats: "ATK +15%",
        },
        {
        name: "Fear and Faith",
        lvl1_stats: "Ki +2",
        lvl10_stats: "All enemies' DEF -10% and Ki +2",
        },
        {
        name: "Xenoverse",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +20% and DEF +10%",
        },
        {
        name: "Super Strike",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +25%",
        },
        {
        name: "Transform",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and DEF +10%",
        },
        {
        name: "Saiyan Roar",
        lvl1_stats: "ATK +25%",
        lvl10_stats: "ATK +25% and DEF +10%",
        },
        {
        name: "Legendary Power",
        lvl1_stats: "ATK +10% when performing a Super Attack",
        lvl10_stats: "ATK +15% when performing a Super Attack",
        },
        {
        name: "Warriors of Universe 6",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +2 and ATK & DEF +6%",
        },
        {
        name: "Shadow Dragons",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK & DEF +20%",
        },
        {
        name: "Penguin Village Adventure",
        lvl1_stats: "ATK +15%",
        lvl10_stats: "ATK +20%",
        },
        {
        name: "Otherworld Warriors",
        lvl1_stats: "ATK +20%",
        lvl10_stats: "ATK +20% and DEF +10%",
        },
        {
        name: "Tournament of Power",
        lvl1_stats: "Ki +3",
        lvl10_stats: "Ki +3 and ATK & DEF +7%",
        },
        {
        name: "Blazing Battle",
        lvl1_stats: "Disables enemy's Rampage; ATK +15%",
        lvl10_stats: "Disables enemy's Rampage; ATK +20%",
        },
        {
        name: "Soul vs Soul",
        lvl1_stats: "Weakens enemy's Regeneration; Ki +1",
        lvl10_stats: "Weakens enemy's Regeneration; Ki +2 and ATK & DEF +5%",
        },
        {
        name: "Golden Z-Fighter",
        lvl1_stats: "Ki +2",
        lvl10_stats: "Ki +3 and chance of performing a critical hit +5%",
        },
        {
        name: "Supreme Power",
        lvl1_stats: "ATK & DEF +5% and activates Penetration",
        lvl10_stats: "ATK & DEF +10% and activates Penetration",
        },
        {
        name: "The Wall Standing Tall",
        lvl1_stats: "Disables enemy's True Power; ATK +15%",
        lvl10_stats: "Disables enemy's True Power; ATK +20%",
        },
        
];

const seedLinks = () => Link.bulkCreate(linkData);

module.exports = seedLinks;
