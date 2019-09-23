import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category;

  constructor(private _categoryService: CategoryService, private _activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._categoryService.getCategoryById(routeData.get('id')).subscribe((category: Category) => {
        this.category = category;
      });
    });
  }
}
