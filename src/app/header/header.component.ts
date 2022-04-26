import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  list: object[] = [];
  inputValue: string = '';
  inputPlaceholder: string = 'Enter value';
  addButtonLabel: string = 'Add';

  onClick(inputValue: string) {
    this.ListService.addItem(inputValue);
    this.list = this.ListService.list;
  }

  constructor(private ListService: ListService) {
  }

  ngOnInit(): void {
  }

}
