import { Component } from '@angular/core';
import { CounterService } from 'src/app/service/counter/counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
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
