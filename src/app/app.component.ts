import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02-schmidt-guillaume';
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        civilite: [],
        nom: [],
        prenom: [],
        adresse: [],
        cp: [],
        ville: [],
        pays: [],
        id: [],
        mail: []
      })
    });
  }
}
