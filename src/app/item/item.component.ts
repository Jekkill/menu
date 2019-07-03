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

  toggleDirectory(event) {
  	// clickable element 
	const currentElement = event.target;

	// check if clickable element is folder 
	if (currentElement.classList.contains('element_for_open_sub_folder')) {

		// subdirectory that clickable element has 
		const togglebleElement = currentElement.parentElement.querySelector('.sub_directory');

		// icon for clickable element 
		const currentIconForFolder = currentElement.querySelector('.material-icons');

		if (currentElement.classList.contains('open')) {
			currentElement.classList.remove('open');
			togglebleElement.setAttribute('style', "display:none;");
			currentIconForFolder.innerHTML = 'folder';
		} else {
			currentElement.classList.add('open');
			togglebleElement.setAttribute('style', "display:block;");
			currentIconForFolder.innerHTML = 'folder_open';
		}
	}
	
  }

}
