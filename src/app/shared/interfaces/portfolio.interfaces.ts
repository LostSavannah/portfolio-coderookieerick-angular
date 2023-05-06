export interface UpdateRequest<T>{
    id:string;
    item:T;
}

export type Entry<T extends {}> = T & {
    id:string;
}

export interface Bio{
    content:string;
}

interface PersonalData{
    name:string;
    value:string;
}