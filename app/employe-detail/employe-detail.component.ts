import { Component, OnInit  } from '@angular/core';
import{ FormBuilder,FormControl,FormGroup,Validators}from '@angular/forms';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {
  formValue !: FormGroup;
constructor (private formbuilber: FormBuilder){}

ngOnInit(): void {
this.formValue = this.formbuilber.group({
  firstName : [''],
  lastName : [''],
  email :[''],
  salary :['']
})    
}
}
