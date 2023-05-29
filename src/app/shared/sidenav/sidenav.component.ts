import { Component } from '@angular/core';
import { CounterService } from 'src/app/service/counter/counter.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(
    private countService: CounterService
  ){

  }
  btnCount = 0

  addCount = () => {
    let count = this.countService.addCounter(this.btnCount)
    this.btnCount = count
  }
}
