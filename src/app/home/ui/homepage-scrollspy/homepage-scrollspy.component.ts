import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'homepage-scrollspy',
  templateUrl: './homepage-scrollspy.component.html',
  styleUrls: ['./homepage-scrollspy.component.scss']
})
export class HomepageScrollspyComponent implements OnInit {
  section: any = 'start-section';

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  GetSection(){
    this.route.fragment.subscribe(fragment => {
      if(fragment != null)
        this.section = fragment;
    })
    return this.section;
  }

}
