import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  getStudentProfiledetails(){
    let studentInfo = { 
      name : "sruthi ps", 
      place : "Kozhikode" ,
      rollno : "UPAQ20",
      course :"MCA",
      mobile : "8838092013",
      email :"sruthips@gmail.com",
      gender :"Female",
      parent_name : "Prajith",
      parent_num : "9544628378",
      guard_relation : "Father"
    }  
    return studentInfo
  }
}
