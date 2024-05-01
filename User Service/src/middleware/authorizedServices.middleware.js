
const AUTHORIZED_SERVICE = process.env.AUTHORIZED_SERVICE;

const authorizedServices = [AUTHORIZED_SERVICE];

module.exports = (req, res, next) => {
    const serviceName = req;
  
    if (!serviceName || serviceName.headers['origin'] == undefined || !authorizedServices.includes(serviceName)) {
      return res.status(403).json({ message: 'Service unauthorized' });
    }
  
    next();
}
