import { Component, EventEmitter, OnInit, Output, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-szamla-rogzites',
  templateUrl: './szamla-rogzites.component.html',
  styleUrls: ['./szamla-rogzites.component.css']
})
export class SzamlaRogzitesComponent implements OnInit {
  
  @Output('szmlCreated') szamlaCreated = new EventEmitter<{szamla_azonosito: number, szamla_neve: string, szamla_nevErteke: number,szamla_penzNeme:string,szamla_statusza:string}>();
  @ViewChild('szamlaContentInput',{static:true})  szamlaContentInput: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }


  onAddSzamla(szamla_neve_Input: HTMLInputElement,szamla_nevErteke_Input: HTMLInputElement,szamla_penzNeme_Input: HTMLInputElement,szamla_statusza_Input: HTMLInputElement) {
    //console.log(this.szamlaContentInput);
    //console.log(nameInput) --> az egész taget küldi be
    //console.log(nameInput.value) --> csak a tag értékét.
     this.szamlaCreated.emit({ 
    szamla_azonosito : 1,
    szamla_neve: szamla_neve_Input.value,
    szamla_nevErteke: Number(szamla_nevErteke_Input.value),
    szamla_penzNeme: szamla_penzNeme_Input.value,
    szamla_statusza: szamla_statusza_Input.value
    
  }); 
  } 


}
