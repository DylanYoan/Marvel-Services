const axios = require('axios');

const healthCtrl = {};

const HEALTH_SERVICE = process.env.HEALTH_SERVICE;

healthCtrl.checkServices = async (req, res) => {
  
    axios.get(`${HEALTH_SERVICE}/getStatusServices`).then(response => {
      res.status(200).json(response.data);
    }).catch(error => {
      res.status(500).json(error);
    });
  
  }

module.exports = healthCtrl;