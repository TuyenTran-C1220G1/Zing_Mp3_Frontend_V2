import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('closebutton', null) closebutton;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(user => {
      localStorage.setItem('ACCESS_TOKEN', user.token);
      this.closebutton.nativeElement.click();
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
        this.router.navigate(['']);
      });
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
          icon: 'success',
          type: 'success',
          title: 'Logged in successfully',
          // background: 'green',

        });
      });
    }, error => {
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
          icon: 'error',
          type: 'success',
          title: 'Login failed',
          // background: 'green',

        });
      });
    });
  }

}
