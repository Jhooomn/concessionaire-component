export class Vehicle {
  id: any;
  type: String;
  brand: String;
  model: String;
  version: String;
  licensePlate: String;
  km: String;
  imgLink: String
  constructor(
    id: any,
    type: String,
    brand: String,
    model: String,
    version: String,
    licensePlate: String,
    km: String,
    imgLink: String
  ) {
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.version = version;
    this.licensePlate = licensePlate;
    this.km = km;
    this.imgLink = imgLink;
  }
}
