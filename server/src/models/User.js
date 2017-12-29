module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    coins: DataTypes.INTEGER
  })
