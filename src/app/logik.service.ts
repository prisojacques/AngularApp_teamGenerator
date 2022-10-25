import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogikService {

  constructor() { }


  generateTeams(numberOfTeams:number | "" , errorMessage: string, members: string[], teams:  string[] []){
    if(!numberOfTeams || numberOfTeams <= 0){
      errorMessage = 'Invalid number of Team';
      return;
    }

    if(members.length < numberOfTeams){
      errorMessage = 'Not enough members';
      return;
    }
    const allMembers = [...members];

    errorMessage= '';

    while (allMembers.length){
      for(let i= 0; i<numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member) break;

        if(teams[i]){
          teams[i].push(member);
        } else {
          teams[i] = [member];


        }
      }
    }

  }

}
