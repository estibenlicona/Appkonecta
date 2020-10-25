import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { TournamentModel } from '../../models/tournament.model';

// Services
import { TournamentService } from '../../services/tournament.service'; 

// Components
import { ModalComponent } from '../app/modal/modal.component';
// Interfaces
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }
];

const structureCreate: Object = {
  title: "Crear torneo",
  inputs: [
    {
      label: 'Name',
      placeholder: 'Ingrese un nombre',
      name: 'name'
    }
  ],
  inputsFile: [
    {
      label: 'Logo',
      placeholder: 'Logo',
      name: 'logo'
    }
  ],
  buttons: [
    {
      value: 'Cancelar',
      accion: 'cancel',
      class: 'btn btn-secondary'
    },
    {
      value: 'Crear',
      accion: 'crear',
      class: 'btn btn-primary'
    }
  ]
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    tournaments:TournamentModel[] = new Array();
    loading: boolean;
    alerts: Alert[];

  	constructor(
      private _tournamentService: TournamentService,
      private _modalComponent: ModalComponent 
  	) { 
      this.loading = true;
      this.reset();
    }

  	ngOnInit(): void {

      // Obtener Torneos     
  		this._tournamentService.getTournaments().subscribe( resp => {
        this.tournaments = resp;
        this.loading = false;
      });
      
  	}

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  openModalCreate(){
    this.modal.open(structureCreate);
  }

}
