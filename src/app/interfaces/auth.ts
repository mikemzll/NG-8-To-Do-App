export interface LoginPageState {
	pending: boolean;
	error: string | null;
}

export interface User {
	username: string,
	password: string,
}

export interface AuthState {
	user: User | null;
}