import Address from "../models/Address";
import {Op} from 'sequelize';



class AddressController {

  async findByCep(request, response){
    const cep = request.params.cep;
    const address = await Address.findOne({where: {cep: cep}});

    if(!address){
      return response.status(404).json({error: "Endereço não encontrado."});
    }

    return response.json(address);
  }

  async findByStreet(request, response){
    const street = request.query.street;
    const addresses = await Address.findAll({
      limit: 10,
      where: {
        street:{
          [Op.like]: '%' + street + '%'
        }
      }
    });

    return response.json(addresses);
  }

}


export default new AddressController();
