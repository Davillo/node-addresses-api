import Address from "../models/Address";


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

  }

}


export default new AddressController();
