import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, interval } from 'rxjs';
import { ProjectsService } from 'src/app/portfolio/data-access/projects.service';
import { Project } from 'src/app/portfolio/model/Project';

@Component({
  selector: 'recent-card',
  templateUrl: './recent-card.component.html',
  styleUrls: ['./recent-card.component.scss']
})
export class RecentCardComponent implements OnInit {
  @Input() cardText: string | undefined;

  allProjects : Project[] = [];
  listSize = 0;
  

  private isHalted = false;

  currentItem: number = 1;
  
  constructor(private router: Router, projectsService : ProjectsService) {
    this.allProjects = projectsService.getAllProjects();
  }

  ngOnInit(): void {
    interval(5000).subscribe(() => {if(!this.isHalted)this.nextItem()});
  }

  nextItem(){
    if(this.listSize >= 3){
      this.currentItem = this.currentItem == 3 ? 1 : this.currentItem + 1;
    }else if(this.listSize == 2){
      this.currentItem = this.currentItem == 2 ? 1 : this.currentItem + 1;
    }
    this.isHalted = true;
    setTimeout(() => {this.isHalted = false;}, 5000);
  }

  previousItem(){
    if(this.listSize >= 3){
    this.currentItem = this.currentItem == 1 ? 3 : this.currentItem - 1;
    }else if(this.listSize == 2){
      this.currentItem = this.currentItem == 1 ? 2 : this.currentItem - 1;
    }
    setTimeout(() => {this.isHalted = false;}, 5000);
  }

  onSectionChange(sectionId: string) {
    this.router.navigate(['/'], {fragment: sectionId});
  }

  getFilteredProjects(){
    var filteredProjects : Project[] = [];
    this.allProjects.forEach(p => {
      if(this.cardText == 'DEVELOPMENT' && p.category == 1){
        filteredProjects.push(p);
      }else if(this.cardText == '3D MODELING' && p.category == 2){
        filteredProjects.push(p);
      }else if(this.cardText == 'WRITING' && p.category == 3){
        filteredProjects.push(p);    
      }
    });
    this.listSize = filteredProjects.length;
    return filteredProjects;
  }

  getProjectName(index : number){
    if(this.getFilteredProjects().length <= index){
      return 'Not Available';
    }else{
      return this.getFilteredProjects()[index].name;
    } 
  }

  getProjectImage(index : number){
    if(this.getFilteredProjects().length <= index){
      return '../../../../assets/placeholder.png';
    }else{
      return this.getFilteredProjects()[index].picture;
    }
  }

  getProjectId(index : number){
    if(this.getFilteredProjects().length <= index){
      return 'noId';
    }else{
      return this.getFilteredProjects()[index].id;
    }
  }

  viewProduct(id : string){
    this.router.navigate(['/portfolio/' + id]);
  }
}
