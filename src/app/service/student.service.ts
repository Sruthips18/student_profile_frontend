import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   
  baseUrl:string = "http://127.0.0.1:8000/students/"
  constructor(private http:HttpClient) { }

  getStudentProfileList(){
    return this.http.get(this.baseUrl)
  }
}
