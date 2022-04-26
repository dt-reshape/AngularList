import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any[] = this.ListService.list;
  deleteButtonLabel: string = 'Delete';
  emptyListLabel: string = 'No data to display';
  dateFormat: string = 'dd.MM.yyyy HH:mm:ss';

  onClick(id: number) {
    this.ListService.deleteItem(id);
    this.list = this.ListService.list;
  }

  constructor(private ListService: ListService) {
  }

  ngOnInit(): void {
    this.ListService.setItemStorage(this.list)
  }
}
