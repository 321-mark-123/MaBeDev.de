import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {//implements OnInit == Onload
 darkMode = false;
  constructor() { }
  imgs = ['binaercode.jpg', 'brain.jpg', 'codescreen.jpg'];
  headlines = ['Bring engineering to the next level', 'born to code', 'best practise'];

  currentImg = 0;
  showImg = true

  ngOnInit() {
    this.updateImg();

}

  updateImg() {

    setInterval(() => {
      this.currentImg++; // addiere 1
      this.currentImg = this.currentImg % this.imgs.length; // modulo wemm lenght = 3 rest dann null0 current img = 0
      this.showImg = false

      setTimeout(() => {
      this.showImg = true
      }, 100);

}, 8000);
   }





}
