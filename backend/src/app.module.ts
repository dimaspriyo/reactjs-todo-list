import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { from } from "rxjs";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { server } from "./db";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
