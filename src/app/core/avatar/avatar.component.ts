import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserI } from '../../shared/models/user.interface';

@Component({
  selector: 'app-avatar',
  imports: [MatIconModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() userData: UserI = {} as UserI;
}
