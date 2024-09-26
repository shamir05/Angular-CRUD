import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent {
  @Input() selectedRows: any[] = [];  // Input from parent component
  @Input() visible: boolean = false; 
  
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  hideDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  // Input from parent component
}
