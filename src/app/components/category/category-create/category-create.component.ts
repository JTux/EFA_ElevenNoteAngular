import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private _categoryService: CategoryService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.categoryForm = this._form.group({
      Name: new FormControl
    });
  }

  onSubmit() {
    this._categoryService.createCategory(this.categoryForm.value).subscribe(() => {
      this._router.navigate(['/category']);
    });
  }
}
