import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output('sortChoiceChanged') sortSelectionChanged = new EventEmitter<number>();
  @Output() clickFired = new EventEmitter<void>()

  updateSortSelection(value: number) {
    console.log(value);
    this.sortSelectionChanged.emit(value)
  }
  handleClick() {
    this.clickFired.emit()
  }
}
