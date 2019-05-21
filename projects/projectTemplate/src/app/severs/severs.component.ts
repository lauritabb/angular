import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severs',
  templateUrl: './severs.component.html',
  styleUrls: ['./severs.component.css']
})
export class SeversComponent implements OnInit {
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

}
