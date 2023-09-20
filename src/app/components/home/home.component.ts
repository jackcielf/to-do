import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    imgUrl = '/assets/images/bg-desktop-dark.jpg';
    mode = 'sun';

  constructor() { }

  ngOnInit() {
  }

  changeMode(): void {
    if (this.mode === 'sun') {
      this.mode = 'moon';
    } else {
      this.mode = 'sun';
    }
  }

}
