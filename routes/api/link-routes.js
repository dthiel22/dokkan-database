const router = require('express').Router();
const { Character, Link } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
// TODO: find all categories
// TODO: be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const characterData = await Link.findAll({
      attributes: {exclude: ['updatedAt','createdAt']},
      include: [{ model: Character,
        attributes: ["title","name"],
        through: {
          attributes: []
        } 
      }],
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Link
//   // TODO: find one Link by its `id` value
//   // TODO: be sure to include its associated Products
router.get('/:name', async (req, res) => {
  try {
    const characterData = await Link.findByPk(req.params.name, {
      attributes: {exclude: ['updatedAt','createdAt']},
      include: [{ model: Character,
        attributes: ["title","name"],
        through: {
          attributes: []
        } 
      }],
    });
    if (!characterData) {
      res.status(404).json({ message: 'No character found with that name!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;