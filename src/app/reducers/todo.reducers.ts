import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import { addTodo, removeTodo, completeTodo, editTodo } from '../actions/todo.actions';

export const initialState: Todo[] = [
	{
		id: 0,
		title: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		completed: true,
	},
	{
		id: 1,
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		completed: true,
	},
	{
		id: 2,
		title: 'Finish Angular App',
		completed: false,
	},
];

var todoId = 3;

const _todoReducer = createReducer( initialState,
		on( addTodo, (state, { title }) => {
			state.push({ id: todoId, title: title, completed: false });
			todoId += 1;
			return state;
		} ),
		on( removeTodo, (state, { id }) => {
			return state.filter( todo => todo.id != id );;
		}),
		on( completeTodo, (state, { id }) => {
			let arr = state.map( obj => obj.id !== id ? obj : { id: obj.id, title: obj.title, completed: !obj.completed } );
			return arr;
		}),
		on( editTodo, (state, { id, title }) => {
			let arr = state.map( obj => obj.id !== id ? obj : { id: obj.id, title: title, completed: obj.completed } );
			return arr;
		}),
	);

export function todoReducer( state, action ){
	return _todoReducer( state, action );
};
