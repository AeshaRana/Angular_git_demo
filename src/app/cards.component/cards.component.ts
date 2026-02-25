import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";
import { StyleClass } from "primeng/styleclass";

@Component({
  selector: 'app-cards',
  imports: [CardModule, DividerModule, ButtonModule, StyleClass],
  standalone:true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input({required:true}) header!:string;
  @Input({required:true}) content!:string;  
}
