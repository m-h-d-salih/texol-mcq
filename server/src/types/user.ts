export interface IUser {
    _id?:string,
    fullName:string,
    email:string,
    password:string,
    mobile:number,
    status:"student"|"employee"
}