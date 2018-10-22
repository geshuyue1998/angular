import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  pinglundetailId:number;
  pinglundetails;
  ngOnInit() {
     this.http.get('/api/pinglundetails').subscribe(data=>{
      this.pinglundetails=data;
   })
    this.router.params.subscribe((params)=>{
      this.pinglundetailId=params['pinglundetailId'];
    });
  }
}
