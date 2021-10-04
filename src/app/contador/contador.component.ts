import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <button (click)="acumular(1)">+1</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-1);">-1</button>

        <br>

        <h3><strong>La base es {{base}}</strong></h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base);">-{{base}}</button>
    `
})
export class ContadorComponent{

    public titulo: string = 'Contador app';

    numero: number = 20;
    base: number = 5;

    acumular( valor : number){
    this.numero += valor;
  }
}