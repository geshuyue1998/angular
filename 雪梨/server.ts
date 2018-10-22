import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){

    }
}
const courses=[
    new Course(1,'2016级混合应用开发',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    2,91),
    new Course(2,'2018计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    1,104),
    new Course(3,'数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    15,94),
    new Course(4,'2017级web开发二',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    4,399),
    new Course(5,'2016级测试方向-web测试系统',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    3,52),
    new Course(6,'2016级HTML5与CSS3前端开发',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    5,91),
    new Course(7,'2017级3/4班软件测试基础',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    3,102),
    new Course(8,'2018信息实践素养',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
   0,12),

   
]

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
const kechengs=[
    new kecheng(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    'Github 开源之旅视频课程第一季：启程',
      '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ','课程 14','人数 3738'),
    new kecheng(2,
        "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
      'Selenium IDE WEB自动化测试入门视频课程（中）',
        '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。','课程 13','人数 3794'),
    new kecheng(3,"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190" ,
    'CSS3基础',
      'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。','课程 12','人数 2320'),
    new kecheng(4,"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190" ,
    "扩展的ICONIX软件过程实践",
    ' ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。','课程 12','人数 2269'),
   
]
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
const pingluns=[
    new pinglun(1,"http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/vsBhNsaAn8Zqd5RSPEVmVM.jpg","js数组","声明：数组声明的三种方式：1. var arr = new Array（）(声明一个空数组对象);2. var arr = new Array（5）；（声明数组并初始化长度，注意数组的长","7-李建涛","2018-10-21 11:27","阅读 1","评论0"),
     new pinglun(2,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg","类定义关键字详解","JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就","3-张馨元","2018-10-09 19:21","阅读 68","评论0"),
    
    new pinglun(3,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg","一个java文件中可包含多个main方法","一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只","3-张馨元","2018-10-09 19:17","阅读 55","评论2"),
   
]
export class coursedetail{
    constructor(
        public id:number,
        public name:string,
        public title:string,
        
    ){}
}
const coursedetails=[
    new coursedetail(1,"基础知识&实用工具/GitHub开源之旅视频课程第一季：启程/课程说明","课程说明（上）")
]
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
const tasks=[
    new task(1,"任务三-混合应用开发","2018年-10月22日截止","未提交","20分","2016级混合应用开发"),
]
export class pinglundetail{
    constructor(
        public id:number,
        public images:string,
         public pinglunName:string,
        public touxiang:string,
         public name:string,
        public time:string,
        public read:string,
        public write:string,
        public text:string,
    ){}
}
const pinglundetails=[
    new pinglundetail(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/vsBhNsaAn8Zqd5RSPEVmVM.jpg","js数组","http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256","7-李建涛","2018-10-21 11:27","阅读 1","评论0","声明：数组声明的三种方式：1. var arr = new Array（）(声明一个空数组对象);2. var arr = new Array（5）；（声明数组并初始化长度，注意数组的长"),
     
]
//app.get('/api',(req,res)=>{
//    res.json(courses);
//});
app.get('/api/courses', (req, res)=> {
    res.json(courses);
});

app.get('/api/courses/:id', (req, res)=> {
    res.json(courses.find((ele)=>ele.id==req.params.id
    ));
});
app.get('/api/kechengs', (req, res)=> {
    res.json(kechengs);
});
app.get('/api/kechengs/:id', (req, res)=> {
    res.json(kechengs.find((ele)=>ele.id==req.params.id
    ));
});
app.get('/api/pingluns', (req, res)=> {
    res.json(pingluns);
});
app.get('/api/pingluns/:id', (req, res)=> {
    res.json(pingluns.find((ele)=>ele.id==req.params.id
    ));
});
app.get('/api/pinglunsdetail', (req, res)=> {
    res.json(pinglundetails);
});
app.get('/api/pinglundetails/:id', (req, res)=> {
    res.json(pinglundetails.find((ele)=>ele.id==req.params.id
    ));
});
app.get('/api/coursedetails', (req, res)=> {
    res.json(coursedetails);
});
app.get('/api/coursedetails/:id', (req, res)=> {
    res.json(coursedetails.find((ele)=>ele.id==req.params.id
    ));
});
app.get('/api/tasks', (req, res)=> {
    res.json(tasks);
});
app.get('/api/tasks/:id', (req, res)=> {
    res.json(tasks.find((ele)=>ele.id==req.params.id
    ));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
    res.json(kechengs);
    res.json(pingluns);
    res.json(pinglundetails);
    res.json(coursedetails);
    res.json(tasks);
})
app.listen(8080);
// class Course{
//     constructor(public courseName:string,
//         public images:string,
//         public task:number,
//         public person:number
//     ){

//     }
// }
// const course=[
//     new Course('混合应用',""
// )
//     {courseName:'混合应用'},
//     {}
// ]
// app.get('/',(req,res)=>{
//     res.end('hello');
// });
// app.get('api/course',(req,res)=>{

//     res.json(courses);
// });
// app.listen(8000);
