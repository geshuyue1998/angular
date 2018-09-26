import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
// @Output()text:string;
// @Output() getV=new EventEmitter();
// getValue(e){
//   this.getV.emit(e);
// }
@Input()arr:Array<any>;
@Output()addIndex=new EventEmitter();
txt:string;

getValue(e){
  if(e.keyCode==13){
    this.arr.push(this.txt);
    this.txt='';
    this.local.set('list',this.arr);
  }
}
getadd(arr){
  this.addIndex.emit(arr);
}
  constructor(private local:CommonService) { }
  
  ngOnInit() {
  }

}
