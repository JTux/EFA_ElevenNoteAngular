import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category';

const Api_Url = 'https://localhost:44383';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get(`${Api_Url}/api/category`, { headers: this.getHeaders() });
  }

  getCategoryById(id) {
    return this._http.get(`${Api_Url}/api/category/${id}`, { headers: this.getHeaders() });
  }

  createCategory(category: Category) {
    return this._http.post(`${Api_Url}/api/category`, category, { headers: this.getHeaders() });
  }

  updateCategory(category: Category) {
    return this._http.put(`${Api_Url}/api/category`, category, { headers: this.getHeaders() });
  }

  deleteCategory(id) {
    return this._http.delete(`${Api_Url}/api/category/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
