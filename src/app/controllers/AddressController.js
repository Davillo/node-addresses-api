import Address from "../models/Address";
import {Op} from 'sequelize';
import District from "../models/District";
import City from "../models/City";
import State from "../models/State";


class AddressController {

  async findByZipCode(request, response){
    const zipCode = request.params.zipCode;

    const address = await Address.findOne({
      where: {zip_code: zipCode},
      attributes: ['id', 'street', 'zip_code'],
      include: [
      {
        attributes: ['id', 'name'],
        model: District,
        as: 'district',
        include: {
          attributes: ['id', 'name'],
          model: City,
          as: 'city',
          include:{
            model: State,
            as: 'state'
          }
        }
      }
    ]});

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
          [Op.like]: `%${street}%`
        }
      },
      include: [
        {
          attributes: ['id', 'name'],
          model: District,
          as: 'district',
          include: {
            attributes: ['id', 'name'],
            model: City,
            as: 'city',
            include:{
              model: State,
              as: 'state'
            }
          }
        }
      ]
    });

    return response.json(addresses);
  }

}


export default new AddressController();
