import { CreateTaskDTO } from "./DTO/taskDTO";
export declare class AppService {
    getHello(): string;
    saveTask(request: CreateTaskDTO): void;
    getTasks(): void;
}
