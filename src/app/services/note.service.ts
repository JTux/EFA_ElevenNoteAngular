import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';

const Api_Url = 'https://localhost:44383';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) { }

  getNotes() {
    return this._http.get(`${Api_Url}/api/note`, { headers: this.getHeaders() });
  }

  getNoteById(id) {
    return this._http.get(`${Api_Url}/api/note/${id}`, { headers: this.getHeaders() });
  }

  createNote(note: Note) {
    return this._http.post(`${Api_Url}/api/note`, note, { headers: this.getHeaders() });
  }

  toggleStar(id) {
    return this._http.put(`${Api_Url}/api/note/${id}/Star`, null, { headers: this.getHeaders() });
  }

  updateNote(note: Note) {
    return this._http.put(`${Api_Url}/api/note`, note, { headers: this.getHeaders() });
  }

  deleteNote(id) {
    return this._http.delete(`${Api_Url}/api/note/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
