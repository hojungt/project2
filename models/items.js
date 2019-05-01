"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.STRING,
      borrow_days: DataTypes.INTEGER,
      isBorrowed: DataTypes.BOOLEAN
    },
    {}
  );
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Item;
};
