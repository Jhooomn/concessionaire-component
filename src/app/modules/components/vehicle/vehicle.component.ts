import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  vehicleModelArray: Vehicle[] = [];

  constructor() {}

  ngOnInit(): void {
    this.managementsImage = 'https://bulma.io/images/placeholders/1280x960.png';
    this.vehicleModelArray.push(
      new Vehicle(
        1,
        'CAMPERO',
        'MAZDA',
        '7',
        '2021',
        'XYZ-785',
        '100',
        'www.google.com'
      )
    );
  }
  vehicleModelNewInstance(): Vehicle {
    return new Vehicle(null, '', '', '', '', '', '', '');
  }

  cleanManagementInputs(): void {
    this.vehicleModel = this.vehicleModelNewInstance();
  }

  saveVehicle(): Vehicle {
    if (this.isVehicleModelValid(this.vehicleModel)) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.cleanManagementInputs();
      return this.vehicleModel;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'All values are required!',
    });
    return this.vehicleModel;
  }

  editVehicle(vehicle: Vehicle): Vehicle {
    if (this.isVehicleModelValid(vehicle)) {
      this.vehicleModel = vehicle;
    }
    return this.vehicleModel;
  }
  deleteVehicle(): void {}

  viewVehicleImgUrlModal(vehicle: Vehicle): void {
    if (this.isVehicleModelValid(vehicle)) {
      Swal.fire(vehicle.imgLink as any);
    }
  }

  isVehicleModelValid(vehicle: Vehicle): Boolean {
    return (
      vehicle.brand != '' &&
      vehicle.km != '' &&
      vehicle.licensePlate != '' &&
      vehicle.model != '' &&
      vehicle.type != '' &&
      vehicle.version != '' &&
      vehicle.imgLink != ''
    );
  }
}
