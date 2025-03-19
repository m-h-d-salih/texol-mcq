export interface IUser {
    _id?:string,
    name:string,
    email:string,
    password:string,
    phone:number,
    status:"student"|"employee"
}