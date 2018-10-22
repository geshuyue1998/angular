import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  headers=new HttpHeaders({});
  ngOnInit() {
    // this.http.get('/api/course/3',null).subscribe((data)=>{
    //     this.course=data;
    // })
    this.http.post('/api',{name:'liugunajun',pwd:123456},{headers:this.headers}).subscribe((data)=>{
      //this.course=data;
      console.log(data);
  })
  }

}
