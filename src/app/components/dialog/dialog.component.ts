import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { addTodo, editTodo } from '../../actions/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
	todoTitle: string;

	constructor(
			public dialogRef: MatDialogRef<DialogComponent>,
			private store: Store<{ state: object[] }>,
			@Inject(MAT_DIALOG_DATA) public data: any,
		){}

	ngOnInit() {
		this.todoTitle = this.data.title
	}

	submit(){
		if( this.todoTitle.trim() !== '' ){
			if( this.data.id !== NaN && this.data.id !== undefined ){
				this.store.dispatch( editTodo({ id: this.data.id, title: this.todoTitle }));
			} else if( this.data.id == NaN || this.data.id == undefined) {
				this.store.dispatch( addTodo({ title: this.todoTitle }));
			}
		}
		this.dialogRef.close();
	}
}
