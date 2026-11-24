import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
  imports: [],
})
export class MonsterCardComponent {
  @Input() eyebrow = 'REGISTRO NOCTURNO';
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() title = '';
  @Input() text = '';
  @Input() buttonLabel = 'DESCUBRIR';
  @Input() tone: 'blood' | 'silver' = 'blood';
  @Output() action = new EventEmitter<void>();
}
