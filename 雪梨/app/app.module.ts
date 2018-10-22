import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { RouterModule } from '@angular/router';
//import { ShareComponent } from '/components/share/share.component';
//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';
import { TongbukeComponent } from './components/tongbuke/tongbuke.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SpeakComponent } from './components/speak/speak.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { TasksdetailComponent } from './components/tasksdetail/tasksdetail.component';
import { CoursesdetailComponent } from './components/coursesdetail/coursesdetail.component';
import { SpeakdetailComponent } from './components/speakdetail/speakdetail.component';
import { UnfinishdetailComponent } from './components/unfinishdetail/unfinishdetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
//import { CommonService } from 'src/app/services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    
   // ShareComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TasksComponent,
    TongbukeComponent,
    CoursesComponent,
    SpeakComponent,
    TongzhiComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    TasksdetailComponent,
    CoursesdetailComponent,
    SpeakdetailComponent,
    UnfinishdetailComponent,
    ShequdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//实现双向数据绑定
    RouterModule.forRoot( [
      { path: 'home', component: HomeComponent,children:[
        {path:'tasks',component:TasksComponent,children:[
          {path: 'unfinishdetail', component:UnfinishdetailComponent }, 
        ]},
        
        {path:'speak',component:SpeakComponent},
        {path:'courses',component:CoursesComponent},
        {path:'tongzhi',component:TongzhiComponent},
        {path:'tongbuke',component:TongbukeComponent},
      ]}, 
      { path: 'tongbu', component:TongbuComponent }, 
      { path: 'tongbu/:courseId', component:TongbudetailComponent }, 
      { path: 'course', component:CourseComponent }, 
      { path: 'course/:coursedetailId', component:CoursedetailComponent }, 
      { path: 'shequ', component: ShequComponent }, 
      { path: 'shequ:/shequdetailId', component: ShequdetailComponent }, 
      { path: '',redirectTo:'home', pathMatch:'full' },
      { path: '**', component: ShequComponent },  
    ] ),
   //AppRoutingModule, 
    HttpClientModule
 ],
  providers: [
   // {provide:CommonService,useClass：Common2Service}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 