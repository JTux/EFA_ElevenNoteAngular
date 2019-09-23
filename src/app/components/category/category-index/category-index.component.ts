import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  columnNames = ['details', 'Name', 'buttons'];
  dataSource: MatTableDataSource<Category>;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories().subscribe((categories: Category[]) => {
      this.dataSource = new MatTableDataSource<Category>(categories);
    });
  }
}
