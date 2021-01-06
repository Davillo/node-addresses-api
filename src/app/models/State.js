import Sequelize, {Model} from 'sequelize';

class State extends Model {

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

}

export default State;
