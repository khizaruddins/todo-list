import { Component } from '@angular/core';
import { FooterComponent } from '../core/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
})
export class LayoutsComponent {}
