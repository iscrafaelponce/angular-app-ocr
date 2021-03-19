import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-home-file',
  templateUrl: './home-file.component.html',
  styleUrls: ['./home-file.component.scss']
})
export class HomeFileComponent implements OnInit {
  listImages = [
    {src: 'eje1.png'},
    { src: 'eje2.jpg'},
    { src: 'eje3.jpg'},
    { src: 'eje4.jpg'},
    { src: 'eje5.jpg'},
    { src: 'eje6.png'},
    { src: 'eje7.jpg'}
  ];

  constructor(
    private _ocrService: OcrService
  ) { }

  ngOnInit(): void {
  }

  clickImage(image){
    this._ocrService.cbImage.emit(image);
  }

}
