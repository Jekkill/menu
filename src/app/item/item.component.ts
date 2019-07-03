import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})

export class ItemComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit() {}

  toggleDirectory(e) {
	console.log(e);
  }

}
