import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  saveVehicle(): Vehicle {
    if (this.isVehicleModelValid()) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      return this.vehicleModel;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'All values are required!',
    });
    return this.vehicleModel;
  }

  isVehicleModelValid(): Boolean {
    return (
      this.vehicleModel.brand != '' ||
      this.vehicleModel.km != '' ||
      this.vehicleModel.licensePlate != '' ||
      this.vehicleModel.model != '' ||
      this.vehicleModel.type != '' ||
      this.vehicleModel.version != ''
    );
  }
}
