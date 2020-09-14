import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent{
  log(x) {
    console.log(x);
  }
}
