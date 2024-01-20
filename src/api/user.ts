import type { LoginRequest, User, JoinUserRequest } from "@/model/User"
import axiosInstance from "./config";

export const loginUser = async ({ queryParams: params }: LoginRequest) =>
    await axiosInstance.post<User>("/user/login", params);

export const logoutUser = async () =>
    await axiosInstance.post("/user/logout");

export const refreshData = async () =>
    await axiosInstance.post<User>("/user/refreshData");

export const joinUser = async ({ queryParams: params }: JoinUserRequest) =>
    await axiosInstance.post("/join", params);