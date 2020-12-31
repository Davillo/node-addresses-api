module.exports = {
  up: (queryInterface, Sequelize) => {
    const AddressesTable = queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      district_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'districts', key: 'id'}
      }
    });

    return AddressesTable;
  },

  down: queryInterface => queryInterface.dropTable('addresses'),
};
