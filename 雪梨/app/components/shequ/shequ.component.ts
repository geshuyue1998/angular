import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  pinglunId:number;
  pingluns;
  ngOnInit() {
     this.http.get('/api/pingluns').subscribe(data=>{
      this.pingluns=data;
   })
    this.router.params.subscribe((params)=>{
      this.pinglunId=params['pinglunId'];
      //参数订阅
    });
  }
}
export class pinglun{
  constructor(
      public id:number,
      public touxiang:string,
      public images:string,
      public pinglunName:string,
      public text:string,
      public name:string,
      public time:string,
      public read:string,
      public write:string,
  ){}
}
