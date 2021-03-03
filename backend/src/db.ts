let redis = require('redis');
const redisClient = redis.createClient({
      host: '127.0.0.1'
  });


redisClient.on('error', function (err) {
  console.log('error');
});

redisClient.on('ready', function (err) {
  console.log('ready');
});

redisClient.on('connect', function (err) {
  console.log('connect');
});

redisClient.on('reconnecting', function (err) {
  console.log('reconnecting');
});

redisClient.on('end', function (err) {
  console.log('end');
});

redisClient.on('warning', function (err) {
  console.log('warning');
});


export {redisClient};