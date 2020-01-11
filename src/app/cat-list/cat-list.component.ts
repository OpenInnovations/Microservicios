import { Component, OnInit } from '@angular/core';
import { CategoriaSService } from '../service/categoria-s.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  catg: Categoria[];

  constructor(private catService: CategoriaSService) {
  }

  ngOnInit() {
    this.catService.findAll().subscribe(data => {
      this.catg = data;
    });
  }

}
