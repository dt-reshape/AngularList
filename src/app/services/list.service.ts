import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: { id: number, value: string, date: number }[] = JSON.parse(<string>localStorage.getItem('list')) || [];

  deleteItem(id: number) {
    this.list = this.list.filter(el => el.id !== id);
    this.setItemStorage(this.list);
  }

  addItem(inputValue: string) {
    this.list.push({
      id: this.list.length,
      value: inputValue,
      date: Date.now()
    })
    this.setItemStorage(this.list);
  }

  setItemStorage(list: { id: number, value: string, date: number }[]) {
    localStorage.setItem('list', JSON.stringify(list))
  }

  constructor() {
  }
}
