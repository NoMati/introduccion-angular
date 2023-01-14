import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  result: boolean = false;
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    if (this.heroeBorrado.length > 1){
      this.result = true;
    }
  }
}
