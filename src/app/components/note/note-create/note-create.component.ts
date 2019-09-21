import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  noteForm: FormGroup;

  constructor(private _noteService: NoteService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.noteForm = this._form.group({
      Title: new FormControl,
      Content: new FormControl,
      CategoryId: new FormControl
    });
  }

  onSubmit() {
    this._noteService.createNote(this.noteForm.value).subscribe(() => {
      this._router.navigate(['/note']);
    });
  }
}
