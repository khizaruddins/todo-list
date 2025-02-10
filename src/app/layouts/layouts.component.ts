import { Component } from '@angular/core';
import { FooterComponent } from '../core/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SidenavComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
})
export class LayoutsComponent {}
