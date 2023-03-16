import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  counter: number = 0;
  tempoRestante: number = 0;
  Acao: string = 'Descanso';
  ciclo: number = 0;
  interval: any;

  ngOnInit(): void {}

  start() {
    this.counter = 0;
    let timerElement = document.getElementById('timer');
    if (timerElement) {
      timerElement.innerHTML = `${this.counter}s`;
    }
    this.tempoRestante = 0;
    this.Acao = 'Descanso';
    this.ciclo = 0;
    this.interval = setInterval(() => {
      this.counter++;
      this.tempoRestante--;
      if (this.ciclo < 8) {
        if (this.tempoRestante <= 0) {
          if (this.Acao === 'Exercitar!') {
            this.Acao = 'Descanso';
            this.tempoRestante = 11;
            //this.tempoRestante = 6;
            this.counter = 0;
          }
          if (this.ciclo < 8) {
            this.Acao = 'Exercitar!';
            this.tempoRestante = 21;
            //this.tempoRestante = 11;
            this.counter = 0;
            this.ciclo++;
          }

          let actionElement = document.getElementById('action');
          let cycleElement = document.getElementById('cycle');
          if (actionElement && cycleElement) {
            actionElement.innerHTML = `${this.Acao}`;
            cycleElement.innerHTML = `Ciclos: ${this.ciclo}`;
          }
        }
        if (timerElement) {
          timerElement.innerHTML = `${this.counter}s`;
        }
        console.log(this.tempoRestante);
      }
    }, 1000);
  }

  stop() {
    this.counter = 0;
    let timerElement = document.getElementById('timer');
    let actionElement = document.getElementById('action');
    if (timerElement && actionElement) {
      timerElement.innerHTML = `${this.counter}s`;
      actionElement.innerHTML = `Parado`;
    }
    clearInterval(this.interval);
  }
}
