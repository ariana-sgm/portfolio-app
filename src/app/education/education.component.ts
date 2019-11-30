import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations = [
    {
      about: "Curso de programación Java",
      institute: "Universidad de Chile y Accenture",
      date: "2019 - actualidad",
    },
    {
      about: "Programa Formacion y Trabajo",
      institute: "Fundación Forge Chile",
      date: "2019 - actualidad",
    },
    {
      about: "Educación Media",
      institute: "Colegio La Esperanza",
      date: "2012 - 2017",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
