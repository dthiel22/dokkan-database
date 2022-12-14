const router = require('express').Router();
const { Character, Category, Link } = require('../../models');

// The `/api/characters` endpoint

// GET all characters
// TODO: find all characters
// TODO: be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      attributes: {exclude: ['updatedAt','createdAt']},
      include: [{ model: Category,
        attributes: ["name"], 
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

// GET a single Character
//   // TODO: find one Character by its `id` value
//   // TODO: be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      attributes: {exclude: ['updatedAt','createdAt']},
      include: [{ model: Category,
        attributes: ["name"],
        through: {
          attributes: []
        } 
      }],
    });
    if (!characterData) {
      res.status(404).json({ message: 'No character found with that id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;