import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview = {
    name: "Ariana González Montilla",
    address: "Dublé Almeyda 2942",
    city: "Santiago de Chile",
    email: "ariana.sgm5@gmail.com",
  };

  objective = "Aspirante a estudiante de ingeniería biomédica.";

  constructor() { }

  ngOnInit() {
  }

}
