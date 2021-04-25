const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({

  }).then((dbCategory) => {
    res.json(dbCategory)
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({


  }).then((dbCategory) => {
    res.json(dbCategory)
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({


  }).then((dbCategory) => {
    res.json(dbCategory)
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  // create a new category
});

router.put('/:id', (req, res) =>{ 
Category.update({
  // update a category by its `id` value

}).then((dbCategory) => {
    res.json(dbCategory)
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
  })
})

router.delete('/:id', (req, res) => {
  Category.destroy({
    
    // delete a category by its `id` value
  }).then((dbCategory) => {
    res.json(dbCategory)
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  
});

module.exports = router;
