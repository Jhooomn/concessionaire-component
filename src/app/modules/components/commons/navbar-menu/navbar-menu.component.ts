import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css'],
})
export class NavbarMenuComponent implements OnInit {
  myName: any = 'Jhon Camilo Barón Berdugo';
  descriptionAboutMe: any = "I'm a Java Backend Developer and DevOps Engineer who is in love with Java ecosystem always looking for new features in version releases, understand functions algorithm, implementing services in the cloud, continuous integrations/delivery pipelines-functions and learning about SRE";
  constructor() {}

  ngOnInit(): void {}

  aboutMe() {
    Swal.fire({
      title: this.myName,
      text: this.descriptionAboutMe,
      imageUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHV6YzDWEtVaA/profile-displayphoto-shrink_800_800/0/1609902102957?e=1640822400&v=beta&t=2JFWxisX9AJaKL1NWLyK1zpy_Qs6w2wwOdkSGW9dJsQ',
      imageWidth: 225,
      imageHeight: 225,
      imageAlt: this.myName,
    });
  }
}
