import { MainComponent } from './../main/main.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
