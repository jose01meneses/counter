import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent{
    public title: string = 'Contador';
    public contador: number = 0;
    public numeros: number[] = [];

    restar = () => this.contador--
    sumar = () => this.contador++

    modificar = (cantidad: number) => {
        this.contador += cantidad;
        this.numeros.push(this.contador);
    }

}