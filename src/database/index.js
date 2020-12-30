import Sequelize from 'sequelize';
import Address from '../app/models/Address';
import City from '../app/models/City';
import District from '../app/models/District';
import State from '../app/models/State';
import databaseConfig from '../config/database';

const models = [Address, City, District, State];

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
