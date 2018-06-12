import { ICompany } from "./company.interface";

export interface IUser {
    uid?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    federalId?: string;
    phone?: string;
    photos?: [
        { description?: string; url?: string; date?: Date }
    ];
    companies?: [ICompany];
}