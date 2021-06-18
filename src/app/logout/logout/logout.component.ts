import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  avatar = '';
  files = '';
  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }
  onChangeFile($event) {
    this.files = $event;
    console.log('files ===>', this.files);
  }

  ngOnInit(): void {
  }

}
