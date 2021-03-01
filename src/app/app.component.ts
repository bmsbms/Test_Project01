import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feladat';
  szamlaId=2;
  szamlaLista = [
    {szamla_azonosito:0o1, szamla_neve:'TesztSzamlaNev01',szamla_nevErteke:0o5,szamla_penzNeme:"HUF",szamla_statusza:"+"},
    {szamla_azonosito:0o2, szamla_neve:'TesztSzamlaNev02',szamla_nevErteke:0o10,szamla_penzNeme:"USD",szamla_statusza:"-"}
  
  ];



  onServerAdded(szamlaData: {szamla_neve: string, szamla_nevErteke: number,szamla_penzNeme:string,szamla_statusza: string}) {
    this.szamlaLista.push({
      szamla_azonosito:this.szamlaId+1,
      szamla_neve: szamlaData.szamla_neve,
      szamla_nevErteke: szamlaData.szamla_nevErteke,
      szamla_penzNeme: szamlaData.szamla_penzNeme,
      szamla_statusza: szamlaData.szamla_statusza 
    });
    this.szamlaId++
  }


}
