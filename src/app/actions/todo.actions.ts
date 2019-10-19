import { createAction, props } from '@ngrx/store';

export const addTodo = createAction( 
		'[Todo Component] Add Todo',
		props<{ title: string }>()
	);
export const removeTodo = createAction(
		'[Todo Component] Remove Todo',
		props<{ id: number }>()
	);
export const completeTodo = createAction(
		'[Todo Component] Complete Todo',
		props<{ id: number }>()
	);
export const editTodo = createAction(
		'[Todo Component] Edit Todo',
		props<{ id: number, title: string }>()
	);