import { Injectable } from '@angular/core';
import * as data from '../../data/data.json';

@Injectable({
  providedIn: 'root'
})

export class ListMenuService {
  
  items = []; 

  constructor() { 
  	this.items = data.tree;
  }

  // get all menu items from file with json extension;
  getAllMenuItems() {
    
  	return this.items;
  }

}
