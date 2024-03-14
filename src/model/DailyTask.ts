import type { BaseUser } from "./User";

export interface DailyTask {
    id: number;
    date: string;
    taskTypes: '점심라디오' | '저녁라디오' | '뉴스';
    taskUsers: TaskUsers[];
}

export interface TaskUsers {
    id: number;
    user: BaseUser;
}

export interface DailyTaskRequest {
    queryParams: {
        date: string;
    }
}