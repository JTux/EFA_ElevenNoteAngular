import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private _activatedRoute: ActivatedRoute, private _noteService: NoteService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._noteService.getNoteById(routeData.get('id')).subscribe((note: Note) => {
        this.note = note;
      });
    });
  }
}
