import { Component, OnInit } from '@angular/core';
import {JwtResponse} from '../../interface/jwt-response';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: JwtResponse;
  hasRoleAdmin = false;
  hasRoleUser = false;
  user: User;
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
    // this.authenticationService.currentUser.subscribe(value => {
    //   this.currentUser = value;
    // });
    this.authenticationService.currentUserSubject.asObservable().subscribe(user => {
      this.currentUser = user;
    });
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_USER') {
          this.hasRoleUser = true;
        }
      }
    }
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
    // tslint:disable-next-line:only-arrow-functions
    $(function() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });

      // @ts-ignore
      Toast.fire({
        icon: 'info',
        type: 'success',
        title: 'You are logged out',
        // background: 'green',

      });
    });
  }
  ngOnInit() {
    this.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
  }

  openMenu() {
      $('#sidebar').width(), 0 === $('#sidebar').offset().left ? $('#sidebar').animate({
        left: -500
      }, 'slow') : $('#sidebar').animate({
        left: '0'
      }, 'slow');
  }
}
