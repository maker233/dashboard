import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input() leyenda: string = 'Leyenda Blanca';
  @Input() progreso: number = 60;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    console.log('progreso', this.progreso);
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log( this.txtProgress );

    if (newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = Number( this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    // tomamos el elemento html con @Viewchild, sacamos la propiedad del objeto con ElementRef(10) y tomamos el metodo value

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor( valor: number ) {

  if (this.progreso >= 100 && valor > 0) {
    this.progreso = 100;
    return;
  }

  if (this.progreso <= 0 && valor < 0) {
    this.progreso = 0;
    return;
  }

  this.progreso = this.progreso + valor;

  this.cambioValor.emit( this.progreso ); // emitimos valor numero de this.progreso en este momento

  this.txtProgress.nativeElement.focus(); // establecemos el foco cuando cambiavalor
}

}
