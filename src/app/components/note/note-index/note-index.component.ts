import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/Note';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.css']
})
export class NoteIndexComponent implements OnInit {

  columnNames = ['details', 'Title', 'IsStarred', 'CategoryName', 'CreatedUtc', 'buttons'];
  dataSource: MatTableDataSource<Note>;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.getNotes().subscribe((notes: Note[]) => {
      this.dataSource = new MatTableDataSource<Note>(notes);
    });
  }

  toggleImportant(id) {
    this._noteService.toggleStar(id).subscribe(() => { });
  }
}
