import type { DailyTask, DailyTaskRequest } from "@/model/DailyTask.ts";
import axiosInstance from "./config.ts";

export const dailyTasks = async ({ queryParams: params }: DailyTaskRequest) =>
    await axiosInstance.get<DailyTask[]>('/dailyTasks', {params});