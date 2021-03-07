import {MongoClient} from 'mongodb';

const server = new MongoClient("mongodb://root:root@mongo:27017",{ useNewUrlParser: true });
export {server};