import { Component } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {
  flag:boolean=true
  num:number=0

  primeNumber(){
    for(let i=2;i<this.num;i++){
      if(this.num%i==0){
        this.flag=false
        break
      }

    }
  }
}
