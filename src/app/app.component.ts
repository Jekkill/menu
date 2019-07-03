import { Component } from '@angular/core';
import { ListMenuService } from './services/list-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  allItems = [];
  
  constructor(
  	private listMenuService: ListMenuService
  ) { }

  ngOnInit() {
  	this.allItems = this.listMenuService.getAllMenuItems();
  }
}
