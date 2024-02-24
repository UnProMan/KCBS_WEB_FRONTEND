import type { Department } from "./Department.ts";

export type UserRoleCode =
    | 'ROLE_PRESIDENT'
    | 'ROLE_VICE_PRESIDENT'
    | 'ROLE_USER'
    | 'ROLE_PRODUCTION_LEADER'
    | 'ROLE_ENGINEER_LEADER'
    | 'ROLE_ANNOUNCER_LEADER'
    | 'ROLE_PRODUCER_LEADER'
    | 'ROLE_CINEMA_LEADER'
    | 'ROLE_EDITING_LEADER'
    | 'ROLE_ANCHOR_LEADER'
    | 'ROLE_ADMIN'
    | 'ROLE_NEWCOMER'
    | 'ROLE_HONOR';

export type UserRole =
    | '국장'
    | '부국장'
    | '정국원'
    | '제작팀장'
    | '기술팀장'
    | '아나운서팀장'
    | 'PD팀장'
    | '촬영팀장'
    | '편집팀장'
    | '앵커팀장'
    | '관리자'
    | '신입국원'
    | '명예국원';

export const userRoleMap: ReadonlyMap<UserRoleCode, UserRole> = new Map([
    ['ROLE_PRESIDENT', '국장'],
    ['ROLE_VICE_PRESIDENT', '부국장'],
    ['ROLE_USER', '정국원'],
    ['ROLE_PRODUCTION_LEADER', '제작팀장'],
    ['ROLE_ENGINEER_LEADER', '기술팀장'],
    ['ROLE_ANNOUNCER_LEADER', '아나운서팀장'],
    ['ROLE_PRODUCER_LEADER', 'PD팀장'],
    ['ROLE_CINEMA_LEADER', '촬영팀장'],
    ['ROLE_EDITING_LEADER', '편집팀장'],
    ['ROLE_ANCHOR_LEADER', '앵커팀장'],
    ['ROLE_ADMIN', '관리자'],
    ['ROLE_NEWCOMER', '신입국원'],
    ['ROLE_HONOR', '명예국원']
]);

export interface LoginRequest {
    queryParams: {
        studentId: string;
        password: string;
    }
};

export interface User {
    id: number;
    studentId: string;
    name: string;
    email: string;
    birthday: Date;
    phone_Number: string;
    attendance_state: '재학' | '휴학';
    role: UserRoleCode;
    kisu: number;
    file_ID: string;
    accessToken: string;
};

export interface JoinUserRequest {
    studentId: string;
    name: string;
    email: string;
    password: string;
    birthday: Date;
    phone_Number: string;
    kisu: number;
};

export interface PersonalStatusRequest {
    queryParams: {
        searchName: string;
        department: number;
    }
}

export interface PersonalStatusUsers {
    id: number;
    studentId: string;
    name: string;
    email: string;
    birthday: Date;
    phone_Number: string;
    attendance_state: '재학' | '휴학';
    role: UserRoleCode;
    kisu: number;
    file_ID: string;
    departments: Department[];
}