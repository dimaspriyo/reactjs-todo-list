import { CreateTaskDTO } from "./DTO/taskDTO";
export declare class AppService {
    getHello(): string;
    saveTask(request: CreateTaskDTO): Promise<void>;
    getTasks(): Promise<any[]>;
}
