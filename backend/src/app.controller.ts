import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateTaskDTO } from './DTO/taskDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("start")
  start(): string {
    this.appService.getHello();
    return 'Start';
  }

  @Post()
  createTask(@Body() request : CreateTaskDTO): string{
    this.appService.saveTask(request);
    return "Task Successfuly Inserted";
  }

  @Get("")
  getTasks(){
    var tasks = this.appService.getTasks();
    return tasks;
  }

  
}
