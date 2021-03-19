import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-out-put-text',
  templateUrl: './out-put-text.component.html',
  styleUrls: ['./out-put-text.component.scss']
})
export class OutPutTextComponent implements OnInit, OnDestroy {
  private listSubscribes: Subscription[];
  public textOut: string;

  constructor(
    private _ocrService: OcrService
  ) { }

  ngOnInit(): void {
    this.listObserve();
  }

  //Parte del puente
  listObserve = () => {
    const observer1$ = this._ocrService.cbText.subscribe( ({text}) => {
      this.textOut = text;
    });
    this.listSubscribes = [observer1$];
  }

  ngOnDestroy(): void{
    this.listSubscribes.forEach(a => a.unsubscribe)
  }

}
