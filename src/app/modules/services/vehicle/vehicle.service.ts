import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../../domain/models/Vehicle';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  url = 'http://localhost:8080/vehicle';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get(this.url).pipe(map((data) => data as Vehicle[]));
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.url}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.url, vehicle, {
      headers: this.httpHeaders,
    });
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.url, vehicle, {
      headers: this.httpHeaders,
    });
  }

  deleteVehicle(id: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${this.url}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
