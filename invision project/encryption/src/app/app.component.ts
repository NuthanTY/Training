import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Morework } from './morework';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-web-worker-app';
  selectedColour: any;
  result: any;
  colourArr = ['#9999ff', '#00aaff', '#008000', '#b33c00', '#663300', '#cc3399'];
  isBusy = false;
  cpuWorker: any;
  prime10 : number = 0;
  prime10000 : number = 0;

  constructor() {
  }

  changeColor(color: string) {
    this.selectedColour = color;
  }
  find10thPrimeNumber() {
    this.prime10 = Morework.findNthPrimeNumber(10800);
 }
  cpuIntensiveWork() {
 



    this.isBusy = true;
    const start = new Date().getTime();
    
    this.find10thPrimeNumber();
    // this.find1000thPrimeNumber();
    let elapsed = new Date().getTime() - start;
    const milliseconds = (elapsed % 1000) / 100;
    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    this.result = { 'TimeElapsed': `${minutes}m, ${seconds}s, ${milliseconds}ms`, 'output': this.prime10 };
    this.isBusy = false;
  }


find1000thPrimeNumber(){
if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    this.prime10000 = data;
  };
  worker.postMessage(1000);
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
}
}