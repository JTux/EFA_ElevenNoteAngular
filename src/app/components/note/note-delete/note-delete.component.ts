import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {

  note: Note;

  constructor(private _noteService: NoteService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._noteService.getNoteById(p.get('id')).subscribe((note: Note) => {
        this.note = note;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._noteService.deleteNote(this.note.NoteId).subscribe(() => {
      this._router.navigate(['/note']);
    });
  }

}
