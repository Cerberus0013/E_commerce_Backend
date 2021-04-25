const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
  // find all tags
  // be sure to include its associated Product data

}) .then((dbtag) => {
    res.json(dbtag);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    // find a single tag by its `id`
    // be sure to include its associated Product data

  })
  .then((dbtag) => {
    res.json(dbtag);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.post('/', (req, res) => {
  Tag.create({
    // create a new tag

  })
  .then((dbtag) => {
    res.json(dbtag);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
 Tag.update({
   // update a tag's name by its `id` valu

 }).then((dbtag) => {
    res.json(dbtag);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
    // delete on tag by its `id` valu
  })
    .then((dbtag) => {
      res.json(dbtag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
