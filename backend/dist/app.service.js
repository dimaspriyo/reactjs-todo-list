"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("./db");
let AppService = class AppService {
    getHello() {
        return "Hello World!";
    }
    async saveTask(request) {
        console.log("Creating Documetn");
        var faker = require("faker");
        const connect = await db_1.server.connect();
        const db = db_1.server.db("todo");
        const collection = db.collection("task");
        const insert = await collection.insertOne({
            timestamp: request.timestamp,
            message: request.message,
            title: request.title
        });
    }
    async getTasks() {
        var tasks = [];
        const connect = await db_1.server.connect();
        const db = db_1.server.db("todo");
        const collection = db.collection("task");
        const result = await collection
            .find({ timestamp: { $gt: new Date().getTime() } })
            .toArray();
        return result;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map