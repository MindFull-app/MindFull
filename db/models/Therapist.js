const therapist = (sequelize, DataTypes) => {
  const Therapist = sequelize.define('Therapist', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Therapist.associate = (models) => {
    Therapist.belongsTo(models.User);
  }

  return Therapist;
}

module.exports = therapist;