import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  voluntariados = [
    {
      organisation: "Organización Sarah Paola Dominguez",
      date: "2012 - 2017",
      about: "Organización y logistica de eventos. Recolección de insumos médicos para niños especiales.",
    },
    {
      organisation: "Organización Segunda Oportunidad",
      date: "2014 - 2017",
      about: "Rescate y rehabilitación de animales callejeros. Organización de eventos mensuales de adopción.",
    },
  ];

  academicas = [
    {
      title: "Olimpiadas Matemáticas Regionales",
      institute: "Asociación Matemática Venezolana",
      date: "2013 - 2017",
      about: "Clasificación y participación. Medalla de bronce en el 2013 y 2015.",
    },
    {
      title: "Modelo de las Naciones Unidas",
      institute: "La Esperanza Model of United Nations",
      date: "2014 - 2017",
      about: "Delegada en modelos intercolegiales. Coorganizadora de ediciones 2016 y 2017 de LEMUN.",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
