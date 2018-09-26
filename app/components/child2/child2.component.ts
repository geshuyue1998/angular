import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() delIndex=new EventEmitter();
  @Output() delIndex1=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  delete(i){
    this.delIndex.emit(i);
  }
  delete1(i){
    this.delIndex1.emit(i);
  }
  change(i){
    this.changeIndex.emit(i);
  }
  constructor(private local:CommonService) { }

  ngOnInit() {
  }

}
