import type { 
    LoginRequest, 
    User, 
    JoinUserRequest, 
    PersonalStatusUsers, 
    PersonalStatusRequest 
} from "@/model/User.ts"
import axiosInstance from "./config.ts";

export const loginUser = async ({ queryParams: params }: LoginRequest) =>
    await axiosInstance.post<User>("/users/login", params);

export const logoutUser = async () =>
    await axiosInstance.post("/users/logout");

export const refreshData = async () =>
    await axiosInstance.get<User>("/users/refreshData");

export const joinUser = async (req: JoinUserRequest) =>
    await axiosInstance.post("/join", req);

export const personalStatusUsers = async ({ queryParams: params }: PersonalStatusRequest) =>
    await axiosInstance.get<PersonalStatusUsers[]>('/users', {params});