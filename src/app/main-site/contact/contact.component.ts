import { Component } from '@angular/core';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ContactFormComponent} from '../contact/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

}
