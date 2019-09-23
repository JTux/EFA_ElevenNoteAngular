import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category;
  categoryForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _categoryService: CategoryService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._categoryService.getCategoryById(p.get('id')).subscribe((category: Category) => {
        this.category = category;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.categoryForm = this._form.group({
      CategoryId: new FormControl(this.category.CategoryId),
      Name: new FormControl(this.category.Name)
    });
  }

  onSubmit() {
    const updatedCategory: Category = {
      CategoryId: this.categoryForm.value.CategoryId,
      Name: this.categoryForm.value.Name
    };
    this._categoryService.updateCategory(updatedCategory).subscribe(() => {
      this._router.navigate(['/category']);
    });
  }
}
