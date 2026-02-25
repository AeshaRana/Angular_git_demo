import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
    @Input({required:true}) label=''
}
