module.exports = {
  up: (queryInterface, Sequelize) => {
    const DistrictsTable = queryInterface.createTable('districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'cities', key: 'id'}
      }
    });

    return DistrictsTable;
  },

  down: queryInterface => queryInterface.dropTable('districts'),
};
