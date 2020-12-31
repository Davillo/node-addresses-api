module.exports = {
  up: (queryInterface, Sequelize) => {
    const StatesTable = queryInterface.createTable('states', {
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
      initials: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });

    return StatesTable;
  },

  down: queryInterface => queryInterface.dropTable('states'),
};
