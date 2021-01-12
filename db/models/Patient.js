const patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
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

  Patient.associate = (models) => {
    Patient.belongsTo(models.User);
  }

  return Patient;
}

module.exports = patient;