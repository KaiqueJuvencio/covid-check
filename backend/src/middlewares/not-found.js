
module.exports = (req, res) => {

return res.status(404).send({ error: `Resource ${req.path} not found`});
};