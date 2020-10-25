import { Component, Injectable, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ModalComponent {

  @ViewChild('content') content;
  closeResult: string;
  title: string;
  inputs: Array<Object>;
  inputsFile: Array<Object>;
  buttons: Array<Object>;
  form: FormGroup;

  constructor(
    private modalService: NgbModal,
    private _fb: FormBuilder
  ) {
    this.createForm();
  }

  open(structure) {

    // Define structure
    this.title = structure.title;
    this.inputs = structure.inputs;
    this.inputsFile = structure.inputsFile;
    this.buttons = structure.buttons;

    // Init modal
    this.modalService.open(this.content, { centered: true });

    
  }

  createForm(){
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  save(){
    console.log(this.form);
  }

}
