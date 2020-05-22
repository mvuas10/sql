'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    task: DataTypes.STRING,
    deadline: DataTypes.INTEGER
  }, {});
  TodoItem.associate = function(models) {
    // associations can be defined here
  };
  return TodoItem;
};