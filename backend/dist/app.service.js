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
const MongoClient = require("mongodb").MongoClient;
let AppService = class AppService {
    getHello() {
        return "Hello World!";
    }
    saveTask(request) {
        var faker = require("faker");
        MongoClient.connect("mongodb://root:root@localhost:27017", function (err, client) {
            const db = client.db("todo");
            const collection = db.collection("task");
            collection.insertOne({
                title: faker.name.title,
                message: faker.random.word,
                timestamp: new Date().getTime() + 40000,
            }, (err, res) => {
                console.log("Document Created");
            });
            client.close();
        });
    }
    getTasks() {
        var tasks = [];
        MongoClient.connect("mongodb://root:root@localhost:27017", function (err, client) {
            const db = client.db("todo");
            const collection = db.collection("task");
            collection.find({}, (err, result) => {
                result.forEach((res) => {
                    console.log(res);
                });
            });
            console.log(tasks);
            client.close();
        });
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map