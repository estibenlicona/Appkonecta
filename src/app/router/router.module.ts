import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TournamentComponent } from '../components/tournament/tournament.component'

const routes: Routes = [
	{ path: 'tournaments', component: TournamentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRouterModule { }
