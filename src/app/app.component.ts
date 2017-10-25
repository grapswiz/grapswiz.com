import {Component, ViewChild} from '@angular/core';
import {SidenavService} from './sidenav/sidenav.service';
import {Subscription} from 'rxjs/Subscription';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private subs = new Subscription();
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit() {
    this.subs.add(this.sidenavService._toggle.asObservable().subscribe(() => this.sidenav.toggle()));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
