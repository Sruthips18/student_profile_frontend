import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  data : any
  constructor(private service:StudentService){}
  studentForm = new FormGroup({
   "name" : new FormControl("",Validators.required),
   "place" : new FormControl("",Validators.required),
   "rollno" : new FormControl("",Validators.required),
   "course" : new FormControl("",Validators.required),
   "mobile" : new FormControl("",[Validators.required,Validators.minLength(10)]),
   "email" : new FormControl("",[Validators.required,Validators.email]),
   "gender" : new FormControl("",Validators.required),
   "parent_name" : new FormControl("",Validators.required),
   "parent_num" : new FormControl("",[Validators.required,Validators.minLength(10)]),
   "guard_relation" : new FormControl("",Validators.required)
  })

  get name(){
    return this.studentForm.get('name')
  }

  get place(){
    return this.studentForm.get('place')
  }

  get rollno(){
    return this.studentForm.get('rollno')
  }

  get course(){
    return this.studentForm.get('course')
  }

  get mobile(){
    return this.studentForm.get('mobile')
  }

  get email(){
    return this.studentForm.get('email')
  }

  get gender(){
    return this.studentForm.get('gender')
  }

  get parent_name(){
    return this.studentForm.get('parent_name')
  }

  get parent_num(){
    return this.studentForm.get('parent_num')
  }

  get guard_relation(){
    return this.studentForm.get('guard_relation')
  }

  editClick(){
    this.studentForm.enable()
  }

  clearForm(){
    this.studentForm.reset()
  }

  saveStudentDetails(){ 
    if(this.studentForm.valid){
      alert("successfully updated")
      console.log(this.studentForm.value)
      this.studentForm.disable()
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit start")
    this.studentForm.patchValue(this.service.getStudentProfiledetails())
    this.studentForm.disable()
  }
}
