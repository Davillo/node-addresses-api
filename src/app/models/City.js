import Sequelize, {Model} from 'sequelize';

class City extends Model {

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
    this.belongsTo(models.State, {foreignKey: 'state_id', as: 'state'})
  }

}

export default City;
