import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/auth';
import { login, logout } from '../actions/auth.actions';

export const initialUsers: User[] = [
	{
		username: 'admin',
		password: 'adminpass',
	},
	{
		username: 'user',
		password: 'userpass',
	},
]

/*const _authReduser = createReducer( initialUsers,
		on(),
	);*/