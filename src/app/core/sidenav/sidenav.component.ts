import { Component, inject, ViewChild } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { VarsService } from '../../services/vars.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatIconModule, RouterLinkActive, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  varsService = inject(VarsService);
  @ViewChild('drawer') drawerRef: MatDrawer = {} as MatDrawer;
  ngAfterViewInit() {
    this.varsService.setDrawer(this.drawerRef);
  }
}
