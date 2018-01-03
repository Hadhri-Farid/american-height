module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    players: DataTypes.INTEGER,
    password: {
      allowNull: true,
      type: DataTypes.STRING
    }
  })
  return Room
}
