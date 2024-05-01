const axios = require('axios');

const healthCtrl = {};

healthCtrl.checkServices = async (req, res) => {
    const serviceUrls = ['http://localhost:8090/api/status', 'http://localhost:8092/marvel/status', 'http://localhost:8091/user/status'];
  
    const requests = serviceUrls.map(url => axios.get(url).then(response => {
      return {
        url: url,
        status: response.status === 200 ? 'On' : 'Off'
      };
    }).catch(error => {
      return {
        url: url,
        status: 'Off'
      };
    }));
  
    const responses = await Promise.all(requests);
  
    let objRes = responses.reduce((result, response) => {
      result[response.url] = response.status;
      return result;
    }, {});

    res.json(objRes);
  }

module.exports = healthCtrl;