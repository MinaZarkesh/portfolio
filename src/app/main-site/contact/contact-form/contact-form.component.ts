import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})



export class ContactFormComponent {


}