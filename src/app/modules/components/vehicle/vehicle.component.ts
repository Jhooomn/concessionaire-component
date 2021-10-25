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
  initialManagementImg: String =
    'https://bulma.io/images/placeholders/1280x960.png';
  constructor() {}

  ngOnInit(): void {
    this.managementsImage = this.initialManagementImg;
    this.vehicleModelArray.push(
      new Vehicle(
        1,
        'CAMPERO',
        'MAZDA',
        '7',
        '2021',
        'XYZ-785',
        '100',
        'data:image/jpeg;base64,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'
      )
    );
  }
  vehicleModelNewInstance(): Vehicle {
    return new Vehicle(null, '', '', '', '', '', '', '');
  }

  cleanManagementInputs(): void {
    this.setManagementsImage(this.initialManagementImg);
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
      this.setManagementsImage(this.vehicleModel.imgLink);
    }
    return this.vehicleModel;
  }
  deleteVehicle(vehicle: Vehicle): void {
    Swal.fire({
      title: 'Do you want to remove ' + vehicle.model + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Remove',
      denyButtonText: `Don't Remove`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Removed!', '', 'success');
        this.vehicleModelArray = [];
      } else if (result.isDenied) {
        Swal.fire(vehicle.model + ' was not removed!', '', 'info');
      }
    });
  }

  viewVehicleImgUrlModal(vehicle: Vehicle): void {
    if (this.isVehicleModelValid(vehicle)) {
      Swal.fire(vehicle.imgLink as any);
    }
  }

  setManagementsImage(url: String): any {
    if (url == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vehicle img is required!',
      });
      return null;
    }
    this.managementsImage = url;
    return null;
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
