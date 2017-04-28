import { Cuadrado } from '../Figura/Cuadrado';
import { Triangulo } from '../Figura/Triangulo';

export class Perimetro{

	public visitCuadrado(fig: Cuadrado){
		console.log("Perimetro --> " + fig.nombre);
	}

	public visitTriangulo(fig: Triangulo){
		console.log("Perimetro --> " + fig.nombre);
	}
}