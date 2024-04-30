module.exports = {
    URL: process.env.URL || 'http://localhost:4009',
    INTEL_PLAT_URL: process.env.INTEL_PLAT_URL || 'http://localhost:4099',
    PORT: process.env.PORT || 4000,
    MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
    MONGODB_DATABASE: process.env.MONGODB_DATABASE || 'marveldb',
    NODE_ENV: process.env.NODE_ENV || 'dev',
}