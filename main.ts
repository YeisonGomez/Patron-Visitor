import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'; 
import { Cuadrado } from './Figura/Cuadrado';
import { Triangulo } from './Figura/Triangulo';

import { Area } from './Visitor/Area';
import { Perimetro } from './Visitor/Perimetro';

@Component({
	selector: 'main',
	template: '<h1>Hola</h1>'
})

class Main {

	constructor(){
		let cuadrado = new Cuadrado();
		let triangulo = new Triangulo();

		let area = new Area();
		let perimetro = new Perimetro();

		cuadrado.accept(area);
		triangulo.accept(area);

		cuadrado.accept(perimetro);
		triangulo.accept(perimetro);
	}
	
}

bootstrap(Main);