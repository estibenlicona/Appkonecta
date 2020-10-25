import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Models
import { TournamentModel } from '../models/tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  	constructor(
  		private http: HttpClient
  	) { }

	getTournaments(){
		return this.http.get('http://127.0.0.1:8000/api/tournaments').pipe(
				map(this.mapTournaments)
			);
	}

	private mapTournaments(tournamentsArray){

		const tournaments: TournamentModel[] = new Array();

		tournamentsArray.forEach( element => {
			
			const tournamentObj: TournamentModel = new TournamentModel();
			tournamentObj.id = element.id;
			tournamentObj.name = element.name;
			tournamentObj.description = element.description;
			tournamentObj.published = element.published;
			tournamentObj.created = element.created_at;
			tournamentObj.update = element.update_at;
			tournamentObj.logo = element.logo;

			tournaments.push(tournamentObj);
		});
		
		return tournaments;
	}
}
