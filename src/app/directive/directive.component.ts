import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


    nom: string;
    typeInput: string;
    status: boolean;
    p1: string;
    p2: string;
    texts: Array<string>;


    constructor() {
        this.nom ='Massine';
        this.typeInput = 'number';
        this.status = true;
        this.p1 ="Paragraphe 1";
        this.p2 ="Paragraphe 2";
        this.texts = ["Un", "Deux", "Trois"];
    }

    controlerStatus() {
        console.log("Directive Click !");
         this.status = ! this.status;
        console.log(this.status);
    }


    afficherInput(val : string) {
      console.log(val);
    }
  ngOnInit() {
  }

}
