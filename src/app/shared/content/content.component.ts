import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter/counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(
    private countService: CounterService
  ){

  }

  btnCount = 0;

  addCount = () => {
    let count = this.countService.addCounter(this.btnCount)
    this.btnCount = count
  }

  ngOnInit(): void {
    // this.btnCount = 0;
  }
}
