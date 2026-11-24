import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, MonsterCardComponent],
})
export class Tab1Page {
  private readonly router = inject(Router);

  openStory(): void {
    void this.router.navigateByUrl('/tabs/tab2');
  }
}
