import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, MonsterCardComponent],
})
export class Tab2Page {
  selectedDetail: 'senses' | 'silver' | null = null;

  revealDetail(detail: 'senses' | 'silver'): void {
    this.selectedDetail = this.selectedDetail === detail ? null : detail;
  }
}
