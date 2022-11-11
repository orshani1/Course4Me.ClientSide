import Course from "./Course";

export default interface User{
    id:number;
    email:string;
    password:string;
    coursePurchased:Course[];
    coursesCreated:Course[];
}