import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { VarsService } from '../../services/vars.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  varsService = inject(VarsService);
  fb = inject(FormBuilder);
  searchForm = {} as FormGroup;
  constructor() {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }
  onGlobalSearch(event: Event) {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
  toggleDrawer() {
    this.varsService.drawer.toggle();
  }
}
