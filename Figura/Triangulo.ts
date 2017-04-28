import { Visitor } from '../Visitor/Visitor';
import { Figura } from './Figura';

export class Triangulo implements Figura{
	
	public nombre : string;

	constructor(){
		this.nombre = 'Triangulo';
	}

	public accept(v: Visitor){
		v.visitTriangulo(this);
	}
}