const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
    // find all categories
    // be sure to include its associated Products
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
    // find one category by its `id` value
    // be sure to include its associated Products
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
    // create a new category
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
      // update a category by its `id` value
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
    // delete a category by its `id` value
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
