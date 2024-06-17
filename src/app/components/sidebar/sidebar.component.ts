import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, NgIf, RippleModule, AvatarModule, StyleClassModule,
    MenubarModule, BadgeModule, InputTextModule, CommonModule, AvatarGroupModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log(this.sidebarVisible)
  }

  items: MenuItem[] = [
    {
      label: 'Tela Inicial',
      items: [
        {  
          label: 'Home',
          icon: 'pi pi-home',
          routerouterLink: ['/home'],
          command: () => this.toggleSidebar()
        },
      ]
    },
  ]

  items2: MenuItem[] = [
    {  
      label: 'Home',
      icon: 'pi pi-home',
      routerouterLink: ['/home']   
    },
  ]
}
