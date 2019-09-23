import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;
  editNoteForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _noteService: NoteService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._noteService.getNoteById(p.get('id')).subscribe((note: Note) => {
        this.note = note;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editNoteForm = this._form.group({
      NoteId: new FormControl(this.note.NoteId),
      IsStarred: new FormControl(this.note.IsStarred),
      Title: new FormControl(this.note.Title),
      Content: new FormControl(this.note.Content),
      CategoryId: new FormControl(this.note.CategoryId)
    });
  }

  onSubmit() {
    const updatedNote: Note = {
      NoteId: this.editNoteForm.value.NoteId,
      IsStarred: this.editNoteForm.value.IsStarred,
      Title: this.editNoteForm.value.Title,
      Content: this.editNoteForm.value.Content,
      CategoryId: this.editNoteForm.value.CategoryId
    };
    this._noteService.updateNote(updatedNote).subscribe(() => {
      this._router.navigate(['/note']);
    });
  }
  
  toggleImportant(id) {
    this._noteService.toggleStar(id).subscribe(() => { });
  }
}
