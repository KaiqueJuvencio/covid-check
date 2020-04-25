
module.exports = (err, req, res, next) => {

    console.error(`Unexpected error in route ${req.path}`);
    console.error(err);

  return res.status(500).send({ error: 'Internal Server Error'});
};