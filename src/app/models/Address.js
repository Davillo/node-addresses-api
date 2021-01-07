import Sequelize, {Model} from 'sequelize';

class Address extends Model {

  static init(sequelize){
    super.init(
    {
      street: Sequelize.STRING,
      zip_code: Sequelize.STRING,
      type: Sequelize.INTEGER,
    },
    {
      sequelize,
      timestamps: false
    });

    return this;
  }

  static associate(models){
    this.belongsTo(models.District, {foreignKey: 'district_id', as: 'district'})
  }
}

export default Address;
