import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category;

  constructor(private _categoryService: CategoryService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._categoryService.getCategoryById(p.get('id')).subscribe((category: Category) => {
        this.category = category;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._categoryService.deleteCategory(this.category.CategoryId).subscribe(() => {
      this._router.navigate(['/category']);
    });
  }
}
