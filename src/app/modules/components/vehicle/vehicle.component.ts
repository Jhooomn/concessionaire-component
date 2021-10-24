import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  managementsImage: String = '';

  constructor() {}

  ngOnInit(): void {
    this.managementsImage = 'https://bulma.io/images/placeholders/1280x960.png';
  }
}
