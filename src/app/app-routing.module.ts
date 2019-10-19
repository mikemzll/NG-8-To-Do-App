import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
	{ 	
		path: 'dash', 	
		component: TodoListComponent,
		data: { edit: false }
	},
	{ 	
		path: 'admin', 	
		component: TodoListComponent,
		data: { edit: true }
	},
	{ 	
		path: 'login', 	
		component: LoginComponent,
	},
	{ 	
		path: '', 	
		redirectTo: '/dash',
	 	pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
