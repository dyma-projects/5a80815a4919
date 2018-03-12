import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


    nom: string;
    typeInput: string;

    constructor() {
        this.nom ='Massine';
        this.typeInput = 'number'
    }

    afficherInput(val : string) {
      console.log(val);
    }
  ngOnInit() {
  }

}
