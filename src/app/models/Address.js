import Sequelize, {Model} from 'sequelize';

class Address extends Model {

  static init(sequelize){
    super.init(
    {
      street: Sequelize.STRING,
      cep: Sequelize.STRING,
      type: Sequelize.INTEGER,
    },
    {
      sequelize
    });

    return this;
  }

}

export default Address;
