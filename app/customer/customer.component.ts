import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
formValue !:FormGroup;
constructor (private frombuilber: FormBuilder){}
ngOnInit(): void {
    this.formValue = this.frombuilber.group({
      firstName :[''],
      lastName : [''],
      email :['']
    })
}
}
