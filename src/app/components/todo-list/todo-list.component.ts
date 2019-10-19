import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Todo } from '../../interfaces/todo';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeTodo, completeTodo } from '../../actions/todo.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
	todos: Todo[];
	state$: Observable<Todo[]>;
	edit$: Observable<boolean>;

	constructor(
			public dialog: MatDialog,
			private store: Store<{ state: Todo[] }>,
			route: ActivatedRoute,
		) { 
			this.state$ = store.pipe( select( 'state' ));
			this.edit$ = route.data.pipe( map( d => d.edit ));
		}

	openDialog( placeholder: string, title: string, id: number ) {
		this.dialog.open( DialogComponent, 
			{ 
				width: '480px',
				data: {
					placeholder: placeholder,
					title: title,
					id: id,
				},
			});
		/*if( task != '' ){
			// метод який міняє глобальну змінну плейсхолдера в модальному вікні
			return;
		}*/
	}
	clickComplete( id: number ): void {
		this.store.dispatch( completeTodo({ id: id }));
	}
	removeTodo( id ){
		this.store.dispatch( removeTodo({ id: id }));
	}

	items(): string {
		var res = '';
		this.state$.subscribe({
			  next(response) { res = `${ response.length }` },
			  error(err) { res = 'Error'; console.error('Error: ' + err); },
			  complete() { console.log('Completed'); }
			});
		return res;
	}
	edit(): boolean {
		var res;
		this.edit$.subscribe({
			  next(response) { res = response },
			});
		return res;
	}

	ngOnInit() {
	}

}
