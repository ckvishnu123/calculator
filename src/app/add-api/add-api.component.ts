import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.css']
})
export class AddApiComponent {
  // CalcService is class in services
  constructor(private service:CalcService){}

  result:number = 0
  addNumber(elem1:any, elem2:any){
    let n1 = Number(elem1.value);
    let n2 = Number(elem2.value);

    let data = {
      "num1": n1,
      "num2": n2
    }
    this.service.performAddition(data).then(res=>res.json()).then(
      data=>this.result=data.Result)
    
    
  }

}
