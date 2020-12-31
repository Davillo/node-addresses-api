module.exports = {
  up: (queryInterface, Sequelize) => {
    const CitiesTable = queryInterface.createTable('cities', {
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
      state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'states', key: 'id'}
      }
    });

    return CitiesTable;
  },

  down: queryInterface => queryInterface.dropTable('cities'),
};
