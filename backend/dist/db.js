"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
let redis = require('redis');
const redisClient = redis.createClient({
    host: '127.0.0.1'
});
exports.redisClient = redisClient;
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
//# sourceMappingURL=db.js.map