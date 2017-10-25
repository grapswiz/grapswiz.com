import {Component, OnInit, Output} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {SidenavService} from '../sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
