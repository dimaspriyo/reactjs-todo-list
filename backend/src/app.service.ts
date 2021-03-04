import { Injectable } from "@nestjs/common";
import { CreateTaskDTO } from "./DTO/taskDTO";
import { server } from "./db";
import { MongoClient } from "mongodb";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  async saveTask(request: CreateTaskDTO) {
    console.log("Creating Documetn");

    var faker = require("faker");

    const connect = await server.connect();
    const db = server.db("todo");
    const collection = db.collection("task");
   const insert =  await collection.insertOne({
      timestamp: request.timestamp,
      message: request.message,
      title: request.title
    });

    
  }

  async getTasks() {
    var tasks = [];

    const connect = await server.connect();

    const db = server.db("todo");
    const collection = db.collection("task");
    const result = await collection
      .find({ timestamp: { $gt: new Date().getTime() } })
      .toArray();


    return result;
  }
}
