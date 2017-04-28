import { Visitor } from '../Visitor/Visitor';
import { Figura } from './Figura';

export class Cuadrado implements Figura{
	
	public nombre : string;

	constructor(){
		this.nombre = 'Cuadrado';
	}

	public accept(v: Visitor){
		v.visitCuadrado(this);
	}
}