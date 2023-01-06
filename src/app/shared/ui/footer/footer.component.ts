import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../../data-access/changelog.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  latestVersion:string = '';

  constructor(private changelogService: ChangelogService) { 
  }
  
  async ngOnInit(): Promise<void> {
    this.changelogService.getLatestVersion().then((data) => this.latestVersion = data);
  }
}
