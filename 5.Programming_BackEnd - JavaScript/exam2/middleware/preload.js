// TODO replace with actula service;
const collectionService = {};

function preload() {
  return function (req, res, next) {
    const id = req.params.id;
     
    // TODO change property name to match collection
    const data = collectionService.getById(id);
    req.locals.data = data;

    next();
  };
}

module.exports = preload;