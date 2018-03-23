import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  
  constructor(public proxyService: ProxyService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.proxyService.siupCounter++;
    if (this.proxyService.siupCounter > 5) {
      this.proxyService.countingEnded = true;
    }
  }


}
