const axios = require('axios');

const healthCtrl = {};

const AUTH_SERVICE= process.env.AUTH_SERVICE;
const USER_SERVICE= process.env.USER_SERVICE;
const MARVEL_SERVICE= process.env.MARVEL_SERVICE;

healthCtrl.checkServices = async (req, res) => {
    const serviceUrls = [AUTH_SERVICE, USER_SERVICE, MARVEL_SERVICE];
  
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