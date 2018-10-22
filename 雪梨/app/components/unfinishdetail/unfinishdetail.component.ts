import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-unfinishdetail',
  templateUrl: './unfinishdetail.component.html',
  styleUrls: ['./unfinishdetail.component.css']
})
export class UnfinishdetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
taskId:number;
tasks;
  ngOnInit() {
    this.http.get('/api/tasks').subscribe(data=>{
      this.tasks=data;
    })
   
    this.router.params.subscribe((params)=>{
      this.taskId=params['taskId'];
  
    });
  }

}
export class task{
  constructor(
      public id:number,
      public name:string,
      public time:string,
      public xianzhuang:string,
      public grade:string,
      public course:string,
  ){}
}
