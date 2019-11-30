import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      position: "Vendedora",
      date: "Enero 2019 - Marzo 2019",
      about: "Venta, atención al cliente y manejo de pedidos al mayor.",
      institute: "Empire Enterprise",
      address: "Atlanta, Estados Unidos",
    },
    {
      position: "Vendedora",
      date: "Diciembre 2018 - Marzo 2019",
      about: "Venta y atención al cliente.",
      institute: "Oro Latino",
      address: "Atlanta, Estados Unidos",
    },
    {
      position: "Au Pair",
      date: "Octubre 2017 - Octubre 2018",
      about: "Cuidado y tutoría de dos niñas (5 y 7 años de edad).",
      institute: "Familia Geke",
      address: "Meerbusch, Alemania",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
