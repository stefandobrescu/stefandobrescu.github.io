import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../model/Project';

@Component({
  selector: 'project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss']
})
export class ProjectListViewComponent implements OnInit {
  @Input() projects: Project[] = [];

  constructor(private router : Router) {
   }

  ngOnInit(): void {
  }

  getCategory(category: number){
    return category == 1 ? 'Programming' : category == 2 ? '3D Modeling' : 'Writing';
  }

  viewProject(projectId : string){
    this.router.navigate(['/portfolio/' + projectId]);
  }

}
