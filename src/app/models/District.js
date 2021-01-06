import Sequelize, {Model} from 'sequelize';

class District extends Model {

  static init(sequelize){
    super.init(
    {
      name: Sequelize.STRING,
    },
    {
      sequelize,
      timestamps: false
    });

    return this;
  }

  static associate(models){
    this.belongsTo(models.City, {foreignKey: 'city_id', as: 'city'})
  }
}

export default District;
