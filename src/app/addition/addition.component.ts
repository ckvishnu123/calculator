import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  // attribute doesn't need var, let etc
  result:number=0

  addNumber(elem1:any, elem2:any){
    let n1 = Number(elem1.value);
    let n2 = Number(elem2.value);
    this.result = n1+n2
    
  }

}
