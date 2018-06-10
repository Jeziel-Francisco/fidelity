import { ICompany } from "./company.interface";

export interface IUser {
    uid?: string;
    name?: string;
    email?: string;
    password?: string;
    federalId?: string;
    phone?: string;
    companies?: [ICompany]
}