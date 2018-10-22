import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  coursedetailId:number;
  coursedetails;
  ngOnInit() {
     this.http.get('/api/coursedetails').subscribe(data=>{
      this.coursedetails=data;
   })
    
    this.router.params.subscribe((params)=>{
      this.coursedetailId=params['coursedetailId'];
      //参数订阅
    });
  }
}
export class coursedetail{
  constructor(
      public id:number,
      public name:string,
      public title:string,
      public video:string,
  ){}
}
