import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../data-access/projects.service';
import { Project } from '../../model/Project';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeCode : number[] = [1,0,1,1];

  constructor(private projectsService : ProjectsService) {
    this.allProjects = projectsService.getAllProjects();
    this.filteredProjects = this.allProjects;
   }

  ngOnInit(): void {
  }

  getProjectsByCategory(category : number){
    var unfilteredProjects = this.allProjects;
    var filteredProjects : Project[] = [];

    unfilteredProjects.forEach(p => {
      if(p.category == category){
        filteredProjects.push(p);
      }
    })
    return filteredProjects;
  }

  filterProjects(code: number[]){
    this.filteredProjects = [];

    for(var i = 0; i < 4; i++){
      this.activeCode[i] = Math.abs(this.activeCode[i] - code[i]);
      if(this.activeCode[i] == 1){
        if(this.filteredProjects.length == 0){
          this.filteredProjects = this.getProjectsByCategory(i+1);
        }
        else{
          this.filteredProjects = this.filteredProjects.concat(this.getProjectsByCategory(i+1));
        }
      }
    }
  }

}
