import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c06',
  templateUrl: './c06.component.html',
  styleUrls: ['./c06.component.css']
})
export class C06Component implements OnInit {
  miVariableAMostrar = "Una variable que enseñar";
  unaCadenaDeCaracteres = "Una variable que mostrar";
  unNumero = 1;
  unObjeto = { nombre: "María José", apellido: "Martínez", ciudad: "Sevilla" };
  textoDelBoton = "No clicado";
 numeroDeClic = 0;

 deportistas = ["Rafa Nadal", "Carolina Marín", "Andrés Iniesta", "Pau Gasol"];
 miClaseFuente = "has-text-primary";
  constructor() { }
  ngOnInit(): void {

  }
  unClic() {
    console.log("clicado");
    this.numeroDeClic ++;
    this.textoDelBoton = "clicado " + this.numeroDeClic + " veces";
    }
}
