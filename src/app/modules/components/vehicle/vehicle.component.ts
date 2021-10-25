import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../domain/models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  managementsImage: String = '';
  vehicleModel = this.vehicleModelNewInstance();

  constructor() {}

  ngOnInit(): void {
    this.managementsImage = 'https://bulma.io/images/placeholders/1280x960.png';
  }
  vehicleModelNewInstance(): Vehicle {
    return new Vehicle(null, '', '', '', '', '', '');
  }

  cleanManagementInputs(): void {
    this.vehicleModel = this.vehicleModelNewInstance();
  }
}
