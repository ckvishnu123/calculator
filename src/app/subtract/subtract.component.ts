import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {

  constructor(private service:CalcService){}

  result:number=0
  num1:number=0
  num2:number=0

  subtractNumber(){
    let data = {
      "num1": this.num1,
      "num2": this.num2
    }
    this.service.performSubtraction(data).then(res=>res.json()).then(
      data=>this.result=data.Result)
  }
}
