import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number = 0;

  adTopic!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addCounter() {
    this.counter++;
  }

}
