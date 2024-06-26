import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "../app/layout/menu-bar/menu-bar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from '../app/layout/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MenuBarComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'Smart-Stocks-WebApp';
}
