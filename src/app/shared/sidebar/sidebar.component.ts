import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  closeSidebar(): void {
    $('#sidebar').width(), 0 === $('#sidebar').offset().left ? $('#sidebar').animate({
      left: -500
    }, 'slow') : $('#sidebar').animate({
      left: '0'
    }, 'slow');
  }
}
