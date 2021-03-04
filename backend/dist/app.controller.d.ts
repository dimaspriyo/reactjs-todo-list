import { AppService } from './app.service';
import { CreateTaskDTO } from './DTO/taskDTO';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    start(): string;
    createTask(request: CreateTaskDTO): string;
    getTasks(): Promise<any[]>;
}
