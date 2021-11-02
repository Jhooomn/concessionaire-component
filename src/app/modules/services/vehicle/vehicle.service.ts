import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../../domain/models/Vehicle';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  url = 'http://127.0.0.1:8000/vehicles/';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Cookie:
      'csrftoken=gpJhMc9GgI6CEBor6YNyBA16gWkpzDrPXKO2b4JJVEdhRdWjP2yaiKB7gCxC3SvP; sessionid=cnq9feoxm01tjnneq5mg31jem9q2mtqi; tabstyle=html-tab',
  });

  constructor(private http: HttpClient) {}
  getVehicles(): Observable<Vehicle[]> {
    return this.http
      .get(this.url + 'list?format=json')
      .pipe(map((data) => data as Vehicle[]));
  }
  /*
  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.url}+'?format=json'/${id}`);
  }
*/
  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.url + 'save', vehicle, {
      headers: this.httpHeaders,
    });
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.url + 'update', vehicle, {
      headers: this.httpHeaders,
    });
  }

  deleteVehicle(id: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${this.url}delete/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
