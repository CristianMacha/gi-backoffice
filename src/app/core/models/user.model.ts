import { Role } from "./role.model";

export class User {
    constructor(
        public id: number,
        public fullname: string,
        public surnames: string,
        public code: string,
        public email: string,
        public active: boolean,
        public createdAt: Date,
        public updatedAt: Date,
        public role: Role
    ) { }
};
