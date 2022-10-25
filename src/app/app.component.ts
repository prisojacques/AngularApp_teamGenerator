import {Component} from '@angular/core';
import {LogikService} from "./logik.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams: string[] [] = [];

  constructor(private logikService: LogikService) {
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name cannot be empty!!";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    this.logikService.generateTeams(this.numberOfTeams, this.errorMessage, this.members, this.teams);
  }
}
