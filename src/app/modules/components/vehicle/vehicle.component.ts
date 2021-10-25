import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Vehicle } from '../../domain/models/Vehicle';
import { VehicleService } from '../../services/vehicle/vehicle.service';

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
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.managementsImage = this.initialManagementImg;
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
