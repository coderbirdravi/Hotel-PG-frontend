import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
formValue !: FormGroup;
constructor(private formbuilber: FormBuilder){}

ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      
    })
}
}
