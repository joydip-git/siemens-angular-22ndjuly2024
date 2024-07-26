import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filterText = ''
  @Output() filterTextChanged = new EventEmitter<string>();

  onInputChange(value: string) {
    this.filterText = value;
    this.filterTextChanged.emit(this.filterText)
  }
}
