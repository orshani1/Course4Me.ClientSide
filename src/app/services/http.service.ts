import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Course from 'src/interfaces/Course';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
   public token:string = "";
  private readonly KEY = 'https://localhost:7180/api';
  constructor(private _http:HttpClient) {

   }
   buyCourse(courseId:number,userId:number,token:string)
   {
      const headers = new HttpHeaders({'Authorization':`Bearer ${token}`});
      const options = {headers:headers};
      return this._http.get(`${this.KEY}/users/buy-course/${courseId}?userId=${userId}`,options);
   }
   getMyInstructorCourses(instructorId:number){
    return this._http.get(`${this.KEY}/Courses/relavent?instructorId=${instructorId}`);
   }
   getPurchasedCourses(id:number){
      return this._http.get(`${this.KEY}/Courses/my-courses/${id}`);
   }
   getAllCourses(){
       return this._http.get(`${this.KEY}/courses`);
   }
   getSingleUser(id:number){
    return this._http.get(`${this.KEY}/users/${id}`);
   }
   postCourse(course:any,userId:number){
        
        
       return this._http.post(`${this.KEY}/courses/add-course?userId=${userId}`,course);
   }
   login(username:string,password:string,token:string)
   {
      const headers = new HttpHeaders({'Authorization':`Bearer ${token}`});
      const options = {headers:headers};
      return this._http.get(`${this.KEY}/users/login?username=${username}&password=${password}`, options);
   }
   getAllUsers(){
    return this._http.get(`${this.KEY}/users`);
   }
   parseObjAsQueryString(user:any)
   {
      var queryString = '?' + new URLSearchParams(user).toString();
      return queryString;
   }
   getSingleCourse(id:any){
      return this._http.get(`${this.KEY}/courses/${id}`);

   }
   addNewRating(courseId:any,rating:any){
      return this._http.post(`${this.KEY}/courses/add-rating?courseId=${courseId}&rating=${rating}`,rating);
   }
   authenticate(userObj:any){
     return this._http.post(`${this.KEY}/users/authenticate`,userObj);
   }
   addCourseImage(file:File,courseId:any){
      const formData: FormData = new FormData();
      formData.append('file', file);
      return this._http.post(`${this.KEY}/courses/image/upload?courseId=${courseId}`,formData);
   }
   getCourseImage(imageId:number){
      
      return this._http.get(`${this.KEY}/courses/image/get/${imageId}`,{responseType:"blob"});
   }
   getVideo(id:number){
      return this._http.get(`${this.KEY}/courses/video/get/${id}`,{responseType:"blob"});
   }
   getCourseVideosPath(courseId:number){
      return this._http.get(`${this.KEY}/courses/video/get/videos-paths?courseId=${courseId}`);
   }
   uploadVideo(file:File,courseId:number){
      const formData: FormData = new FormData();
      formData.append('file', file);
      return this._http.post(`${this.KEY}/courses/video/upload?courseId=${courseId}`,formData);
   }
   uploadNewEpisode(episodeObj:any){
      return this._http.post(`${this.KEY}/courses/video/upload/episode`,episodeObj);
   }
   getEpisodes(courseId:number){
      return this._http.get(`${this.KEY}/courses/video/get/episodes?courseId=${courseId}`);
   }
   getSinglePath(videoId:number){
      return this._http.get(`${this.KEY}/courses/video/single/get-path?videoId=${videoId}`);
   }
   updateCourse(course:any){
    return  this._http.put(`${this.KEY}/update`,course);
   }
   addNewUser(file:File,userObj:any){
      const formData:FormData = new FormData();
      formData.append('file',file);
      return this._http.post(`${this.KEY}/users/add-user?email=${userObj.email}&password=${userObj.password}`,formData);
   }
  }