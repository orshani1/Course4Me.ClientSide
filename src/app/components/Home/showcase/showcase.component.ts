import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  index:number = 0;
  src:string = 'https://thedailyguardian.com/wp-content/uploads/2022/04/Why-Teacher-Performance-Evaluations-Are-Important.jpg';
  gallery:string[] = ['https://thedailyguardian.com/wp-content/uploads/2022/04/Why-Teacher-Performance-Evaluations-Are-Important.jpg','https://www.verywellmind.com/thmb/W6MxAkYKqA7_8fS5031Ogieuaio=/3435x2576/smart/filters:no_upscale()/student-learning-56a7923a3df78cf772973ce5.jpg','https://www.marketing91.com/wp-content/uploads/2021/02/What-is-Group.jpg'];

  constructor() { }

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   
        this.togglePhotos();
  
  }
  togglePhotos(){
    if(this.index <= 3){
      this.index++;
      setInterval(()=>{
        this.src = this.gallery[this.index];
      },10000);
    }
    else{

      this.src = this.gallery[2];
    }
  
    }
  
  } 


