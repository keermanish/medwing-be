const config = {
  development: {
    PORT: process.env.PORT || 4000,
    DB_URL: `mongodb://${encodeURIComponent('makeerd')}:${encodeURIComponent('medwing2019#3')}@ds357955.mlab.com:57955/medwing`
  },
  production: {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
  }
};

// expecting `mode` as env varible to decide production vs development
module.exports = config[process.env.MODE || 'development'];
