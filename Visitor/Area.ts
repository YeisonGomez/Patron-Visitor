import { Visitor } from '../Visitor/Visitor';
import { Cuadrado } from '../Figura/Cuadrado';
import { Triangulo } from '../Figura/Triangulo';

export class Area implements Visitor {

	public visitCuadrado(fig: Cuadrado){
		console.log("Area --> " + fig.nombre);
	}

	public visitTriangulo(fig: Triangulo){
		console.log("Area --> " + fig.nombre);
	}
}