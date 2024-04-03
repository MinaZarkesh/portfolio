import { Component, NgModule, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

// import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {

  http = inject(HttpClient);

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

  mailTest = false;

  post = {
    endPoint:
      'https://mina-zarkesh.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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

  checkValidation(ngForm: NgForm): boolean {
    if (ngForm.form.valid) {
      return false;
    } else {
      return true;
    }
  }
  checkboxState: boolean = false;

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
           //hier wird die Antwort vom Server angezeigt
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      //hier wird die Emailversandmeldung angezeigt
      alert('Email was sent');
      ngForm.resetForm();
    }
  }
}
