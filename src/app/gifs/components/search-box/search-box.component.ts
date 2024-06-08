import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #textTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    if (this.tagInput.nativeElement.value.length === 0) return;

    const newTag = this.tagInput.nativeElement.value.trim();

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}