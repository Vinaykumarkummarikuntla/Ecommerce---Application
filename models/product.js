const db = require("../util/database");

// const fs = require('fs');
// const path = require('path');

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products(title,price,description,imageUrl) VALUES (?,?,?,?)',[this.title,this.price,this.description,this.imageUrl]);
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');

//   }

//   static findById(id) {

//     return db.execute('SELECT * FROM products WHERE id = ?', [id]);
//   }

//   static deleteById(id){
//     return db.execute('DELETE FROM products WHERE id = ?', [id]);
//   }
// };

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("products", {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },

  title: Sequelize.STRING,

  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  
});

module.exports = Product;
