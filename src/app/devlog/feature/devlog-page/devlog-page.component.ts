import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../../../shared/data-access/changelog.service';
import { Version } from '../../model/Version';

@Component({
  selector: 'devlog-page',
  templateUrl: './devlog-page.component.html',
  styleUrls: ['./devlog-page.component.scss']
})
export class DevlogPageComponent implements OnInit {
  changelogList : Version[] = [];

  constructor(private changelogService: ChangelogService) {
    this.initDevlog();
   }

  ngOnInit(): void {
  }

  initDevlog(){
    this.changelogList = this.changelogService.getChanges();
  }
}
