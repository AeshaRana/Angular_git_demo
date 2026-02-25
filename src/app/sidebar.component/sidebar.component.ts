import { Component, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { RouterLink } from "@angular/router";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, RouterLink, DividerModule],
  standalone:true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
   @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: Event): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}
