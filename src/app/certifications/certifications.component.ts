import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certificados = [
    {
      title: "Certificado Deutsch B2",
      institute: "Goethe Institute Santiago",
      year: "2019",
    },
    {
      title: "Advanced English Certification",
      institute: "The Language College",
      year: "2016",
    },
    {
      title: "Certificado de Primeros Auxilios",
      institute: "Cruz Roja Venezolana",
      year: "2017",
    },
  ]

  cursos = [
    {
      title: "Beca Deutsch Jugendkurs",
      institute: "Goethe Institut",
      about: "Curso y certificación de alemán B1 en Swäbisch Hall, Alemania.",
      year: "2016",
    },
    {
      title: "Beca de estudio de prueba",
      institute: "Universidad de Heidelberg",
      about: "Curso de alemán B2. Observadora en clases universitarias de biología, química y física",
      year: "2016",
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
