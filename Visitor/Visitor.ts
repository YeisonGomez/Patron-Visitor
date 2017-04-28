import { Cuadrado } from '../Figura/Cuadrado';
import { Triangulo } from '../Figura/Triangulo';

export abstract class Visitor{

	abstract visitCuadrado(c: Cuadrado);

	abstract visitTriangulo(t: Triangulo);
}