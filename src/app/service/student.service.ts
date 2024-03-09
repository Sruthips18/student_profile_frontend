import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  getStudentProfiledetails(){
    let studentInfo = { 
      name : "sruthi service", 
      place : "Kozhikode" ,
    }  
    return studentInfo
  }
}
