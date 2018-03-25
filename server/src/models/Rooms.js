module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    players: DataTypes.INTEGER,
    roomPassword: DataTypes.STRING
  })
  Room.associate = function (models) {
  }

  return Room
}
