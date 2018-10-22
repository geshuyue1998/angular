import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  kechengId:number;
  kechengs;
  ngOnInit() {
     this.http.get('/api/kechengs').subscribe(data=>{
      this.kechengs=data;
   })
    //参数快照this.courseId=this.router.snapshot.params['courseId'];
    this.router.params.subscribe((params)=>{
      this.kechengId=params['kechengId'];
      //参数订阅
    });
  }
}
export class kecheng{
  constructor(
      public id:number,
      public images:string,
      public kechengName:string,
      public jieshao:string,
      public time:string,
      public person:string
  ){}
}
