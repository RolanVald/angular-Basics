import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe():void{
    let heroeBorrado:string = this.heroes.shift() || '';
    this.heroesBorrados.push( heroeBorrado  );
  }

}
