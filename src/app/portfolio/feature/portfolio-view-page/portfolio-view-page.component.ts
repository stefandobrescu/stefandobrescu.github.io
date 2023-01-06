import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { ProjectsService } from '../../data-access/projects.service';
import { Project } from '../../model/Project';

@Component({
  selector: 'portfolio-view-page',
  templateUrl: './portfolio-view-page.component.html',
  styleUrls: ['./portfolio-view-page.component.scss']
})
export class PortfolioViewPageComponent implements OnInit {
  private allProjects : Project[] = [];
  private isHalted = false;
  public currentItem: number = 1;
  private id : string | null;

  constructor(private projectsService : ProjectsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.allProjects = projectsService.getAllProjects();
  }
  
  ngOnInit(): void {
    interval(5000).subscribe(() => {if(!this.isHalted)this.nextItem()});
  }
  
  nextItem(){
    this.currentItem = this.currentItem == this.getProject().pictures.length ? 1 : this.currentItem + 1;
    
    this.isHalted = true;
    setTimeout(() => {this.isHalted = false;}, 5000);
  }
  
  previousItem(){
    this.currentItem = this.currentItem == 1 ? this.getProject().pictures.length : this.currentItem - 1;
    
    this.isHalted = true;
    setTimeout(() => {this.isHalted = false;}, 5000);
  }

  getImageUrl(){
    return this.getProject().pictures[this.currentItem-1].url;
  }
  
  getImageText(){
    return this.getProject().pictures[this.currentItem-1].text;
  }
  
  getProject(){
    var project : Project | any;
    
    this.allProjects.forEach(p => {
      if(p.id == this.id){
        project = p;
      }
    })
    return project;
  }

}
