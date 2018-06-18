import { IUser } from "./user.interface";

export interface ICompany {
    uid?: string;
    name?: string;
    fantasy?: string;
    federalIdentification?: string;
    stateIdentification?: string;
    contatct?: string;
    phones?: [
        {
            phone?: string;
            contact?: string;
        }
    ];
    photos?: [
        { description?: string, url?: string, date?: Date }
    ];
    dateRegistration?: Date;
    logoUrl?: string;
    evaluation?: number;
    users?: [IUser];
}