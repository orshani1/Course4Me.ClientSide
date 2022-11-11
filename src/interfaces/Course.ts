import User from "./User";

export default interface Course{
    id:number;
    courseName:string;
    description:string;
    courseAuthor:User;
    price:number;
    rating:number;
    numOfStudents:number;
    listOfStudents:User;
    
}