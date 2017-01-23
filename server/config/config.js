const env = process.env.NODE_ENV || 'development';
const CONFIG = require('./../../config.json');
console.log("env *********", env);

if (env === 'development') {
  process.env.MONGODB_URI = CONFIG.mongodb.development;
} else if (env === 'test'){
  process.env.MONGODB_URI = CONFIG.mongodb.test;
}