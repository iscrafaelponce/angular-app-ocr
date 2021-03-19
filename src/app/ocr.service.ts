import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  //Puente entre componentes
  cbImage:EventEmitter<any> = new EventEmitter<any>();
  cbText:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
