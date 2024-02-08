import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  // imports: [MatIconModule, MatInputModule, MatFormFieldModule],
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})



export class ContactFormComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  outline:boolean = false;

  checkOutline(input: any) {

    if(input.valid && input.touched) {
      console.log('Input: green', input.id);
      // this.outline = true;
      } else if(!input.valid && input.touched){
        console.log('Input: red', input.id);
      } else{
        console.log('Input: purple', input.id);
      }
  }


  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  checkboxState: boolean = false;
}