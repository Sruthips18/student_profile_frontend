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
  
  editClick(){
    this.studentForm.enable()
  }
  clearForm(){
    this.studentForm.reset()
  }
  saveStudentDetails(){
    let data = this.studentForm.value
    if(this.studentForm.valid){
      this.service.updateStudentDetails(1,data).subscribe(data=>console.log(data))
      alert("successfully updated")
      this.studentForm.disable()
    }
  }
    ngOnInit(): void {
    console.log("ngOnInit start")
    this.service.getStudentProfiledetails(1).subscribe(data=>this.studentForm.patchValue(data))
    this.studentForm.disable()
  }
}
