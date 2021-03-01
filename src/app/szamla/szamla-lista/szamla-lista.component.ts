import { Component, Input, OnInit } from '@angular/core';
import { Szamla } from '../szamla.model';

@Component({
  selector: 'app-szamla-lista',
  templateUrl: './szamla-lista.component.html',
  styleUrls: ['./szamla-lista.component.css']
})
export class SzamlaListaComponent implements OnInit {

  @Input('szmlElement') szamla: {szamla_azonosito:number, szamla_neve:string, szamla_nevErteke: number,szamla_penzNeme: string,szamla_statusza:string}
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
