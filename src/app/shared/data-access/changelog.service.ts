import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { Version } from '../../devlog/model/Version';

@Injectable({
  providedIn: 'root'
})
export class ChangelogService {
  latestVersion : string = '';

  constructor(private db: AngularFireDatabase) {this.getChanges() }

  getChanges(){
    var versList: Version[] = [];
    
    this.db.list('versionControl').snapshotChanges().subscribe(version => {
      version.map(v => ({key: v.payload.key, data: v.payload.val() as any})).forEach(version => {
        var changeList : string[] = [];
        var number = 1;
        do{
          changeList.unshift(version.data.changes[number]);
          number = number + 1;
          
        }while(version.data.changes[number] != undefined);

        const newVersion: Version = {
          number : version.data.number,
          date : version.data.date,
          changes : changeList
        }
        this.latestVersion = version.data.number;
        versList.unshift(newVersion);
      })
      });
      return versList;
  }

  async getLatestVersion(){
    await new Promise(f => setTimeout(f, 1000));
    return this.latestVersion;
  }
}
