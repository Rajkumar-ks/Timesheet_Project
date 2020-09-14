import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  projects = [
    {id : 1, name: 'AWS'},
    {id : 2, name: 'AVAYA'},
    {id : 3, name: 'CISCO'},
  ];

  onAdd(){
    this.projects.push({id:4, name: 'Timesheet'});
  }

  onRemove(project){
    let index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
  }
}
