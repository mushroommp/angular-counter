import { Component } from '@angular/core';
import { CounterService } from '../../service/counter/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private countService: CounterService) {}
  btnCount = 0;

  addCount = () => {
    let count = this.countService.addCounter(this.btnCount);
    this.btnCount = count;
  };
}
