import { IUser } from "./user.interface";

export interface ICompany {
    uid?: string;

    users: [IUser]
}