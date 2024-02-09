import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})

export class ContactFormComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  outline: boolean = false;

  checkOutline(input: any) {
    if (input.valid && input.touched) {
      console.log('Input: green', input.id);
      // this.outline = true;
    } else if (!input.valid && input.touched) {
      console.log('Input: red', input.id);
    } else {
      console.log('Input: purple', input.id);
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  checkboxState: boolean = false;
}
