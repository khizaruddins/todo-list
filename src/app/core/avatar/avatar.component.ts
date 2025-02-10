import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserI } from '../../shared/models/user.interface';
import { UtilsService } from '../../services/utils.service';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar',
  imports: [MatIconModule, MatRippleModule, MatMenuModule, RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() userData: UserI = {} as UserI;
  public util = inject(UtilsService);
}
