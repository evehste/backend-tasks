const validadeFieldTitle = (request, response, next) => {
  const { body } = request;

  if(body.title === undefined){
    return response.status(400).json({message: 'O campo titulo é obrigatório'});
  }

  if(body.title === ''){
    return response.status(400).json({message: 'O campo titulo é obrigatório'});
  }

  next();
};

const validadeFieldStatus = (request, response, next) => {
  const { body } = request;

  if(body.status === undefined){
    return response.status(400).json({message: 'O campo status é obrigatório'});
  }

  if(body.status === ''){
    return response.status(400).json({message: 'O campo status é obrigatório'});
  }

  next();

};

module.exports = {validadeFieldTitle, validadeFieldStatus };