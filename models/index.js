// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Category_id'
})
// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'Category_id'
})
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  foreignKey: 'Product_id',
})
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  foreignKey: 'Product_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
