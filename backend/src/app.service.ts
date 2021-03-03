import { Injectable } from "@nestjs/common";
import { CreateTaskDTO } from "./DTO/taskDTO";
const MongoClient = require("mongodb").MongoClient;

// MongoClient.connect(
//   "mongodb://root:root@localhost:27017",
//   function (err, client) {
//     console.log("Connected successfully to server");

//     const db = client.db("todo");
//     const collection = db.collection("task");

//     client.close();
//   }
// );

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  saveTask(request: CreateTaskDTO) {
    var faker = require("faker");

    MongoClient.connect(
      "mongodb://root:root@localhost:27017",
      function (err, client) {
        const db = client.db("todo");
        const collection = db.collection("task");

        collection.insertOne(
          {
            title: faker.name.title,
            message: faker.random.word,
            timestamp: new Date().getTime() + 40000,
          },
          (err, res) => {
            console.log("Document Created");
          }
        );
        client.close();
      }
    );
  }

  getTasks() {
    var tasks = [];

    MongoClient.connect(
      "mongodb://root:root@localhost:27017",
      function (err, client) {
        const db = client.db("todo");
        const collection = db.collection("task");

        collection.find({}, (err, result) => {
          result.forEach((res) => {
            console.log(res);
          });
        });

        console.log(tasks);

        client.close();
      }
    );
  }
}
