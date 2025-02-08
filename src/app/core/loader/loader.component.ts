import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() numbers = 4;
  loaders: number[] = [];

  ngOnInit() {
    for (let i = 0; i < this.numbers * 3; i++) {
      this.loaders.push(i);
    }
  }
}
