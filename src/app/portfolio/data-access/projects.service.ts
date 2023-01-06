import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ContentItem } from '../model/ContentItem';
import { DisplayPicture } from '../model/DisplayPicture';
import { Metadata } from '../model/Metadata';
import { Project } from '../model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 constructor(private db: AngularFireDatabase) { }

  getAllProjects(){
    var projectList : Project[] = [];
    this.db.list('projects').snapshotChanges().subscribe(project => {
      var dataList : any[] = [];
      project.forEach(p => {dataList.push(p.payload.val())});


      dataList.forEach(data => {
        var newProject : Project = {
          id: data.id,
          category: data.category,
          name: data.name,
          description: data.description,
          picture: data.picture,
          status: data.status,
          pictures: this.getPictures(data.pictures),
          content: this.getContent(data.content),
          metadata: this.getMetadata(data.metadata)
        };
        
        if(newProject.category != 2){
          projectList.push(newProject);
        }
        
      })

    });

    return projectList as unknown as Project[];
  }

  getPictures(data : any){
    var displayPictures : DisplayPicture[] = [];
    if(Array.isArray(data)){
      data.forEach((p: any) => {
        var displayPicture : DisplayPicture = {
          text: p.text,
          url: p.url
        };
        displayPictures.push(displayPicture);
      })
    }else{
      var displayPicture : DisplayPicture = {
        text: data.text,
        url: data.url
      };
      displayPictures.push(displayPicture);
    }

    return displayPictures;
  }

  getContent(data : any){
    var contentItem : ContentItem[] = [];
    if(Array.isArray(data)){
      data.forEach((c: any) => {
        var content : ContentItem = {
          type: c.type,
          text: c.text
        };
        contentItem.push(content);
      })
    }else{
      var content : ContentItem = {
        type: data.type,
        text: data.text
      };
      contentItem.push(content);
    }

    return contentItem;
  }

  getMetadata(data : any){
    var metadataList : Metadata[] = [];
    if(Array.isArray(data)){
      data.forEach((m: any) => {
        var metadata : Metadata = {
          name: m.name,
          value: m.value
        };
        metadataList.push(metadata);
      })
    }else{
      var metadata : Metadata = {
        name: data.name,
        value: data.value
      };
      metadataList.push(metadata);
    }

    return metadataList;
  }
}

