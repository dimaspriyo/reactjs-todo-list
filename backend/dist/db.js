"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const mongodb_1 = require("mongodb");
const server = new mongodb_1.MongoClient("mongodb://root:root@mongo:27017", { useNewUrlParser: true });
exports.server = server;
//# sourceMappingURL=db.js.map