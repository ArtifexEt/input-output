import { Component, OnInit} from '@angular/core';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  constructor(public proxyService: ProxyService) { }

  ngOnInit() {
  }

}
