import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  [x: string]: any;
  title:string;
  txt:string;
  data:string[]=[];
  data1:string[]=[];  
  getValue(e){
    if(e.keyCode==13){
      this.data.push(this.txt);
      this.txt='';
    }
    this.local.set('list',this.data);
    //localStorage.clear();

  }
  delete(i){
    this.data.splice(i,1);
    this.local.set('list',this.data);
//localStorage.clear();
  }
  delete1(i){
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
    //localStorage.clear();
  }
  change(i){
    let e=this.data.splice(i,1);
    this.data1.push(e[0]);
    this.local.set('list',this.data);
    this.local.set('list1',this.data1);
  
  }

  constructor(private local:CommonService) { }

  ngOnInit() {
    if(this.local.get("list")){
      this.data=localStorage.getItem("list").split(",");
    }else{
      this.data=[];
    }
    if(this.local.get("list1")){
      this.data1=localStorage.getItem("list1").split(",");
    }else{
      this.data1=[];
    }
  }

}
