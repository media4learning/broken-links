import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  crashApp() {
    window.location = `mailto:max@ionic.io`;
  }
}
