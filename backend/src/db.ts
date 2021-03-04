import {MongoClient} from 'mongodb';

const server = new MongoClient("mongodb://root:root@localhost:27017",{ useNewUrlParser: true });
export {server};