import { Visitor } from '../Visitor/Visitor';

export abstract class Figura{

	abstract nombre: string;

	abstract accept(visite: Visitor);
}