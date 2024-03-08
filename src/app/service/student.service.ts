import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  baseUrl:string = "http://127.0.0.1:8000/students/"
  constructor(private http:HttpClient) { }

  getStudentProfiledetails(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }

  updateStudentDetails(id:any,data:any){
    return this.http.put(`${this.baseUrl}${id}/`,data)
  }
 
}
