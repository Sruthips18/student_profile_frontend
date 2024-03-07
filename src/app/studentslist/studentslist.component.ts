import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
 
  constructor(private service:StudentService){}
  studentForm = new FormGroup({
   "name" : new FormControl("",Validators.required),
   "place" : new FormControl("",Validators.required),
   "rollno" : new FormControl("",Validators.required),
   "course" : new FormControl("",Validators.required),
   "mobile" : new FormControl("",Validators.required),
   "email" : new FormControl("",Validators.required),
   "gender" : new FormControl("",Validators.required),
   "parent_name" : new FormControl("",Validators.required),
   "parent_num" : new FormControl("",Validators.required),
   "guard_relation" : new FormControl("",Validators.required)
  })

  ngOnInit(): void {
    this.service.getStudentProfileList().subscribe(data=>console.log(data))
  }

}
