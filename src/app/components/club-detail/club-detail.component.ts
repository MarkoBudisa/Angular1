import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Stadium } from 'src/app/models/stadium';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css'],
})
export class ClubDetailComponent implements OnInit {
  @Input() stadium: Stadium = {
    id: 0,
    name: '',
    capacity: 0,
    openDate: '',
    picture: '',
  };
  @Input() club: Club = {
    //Ovo smo napravili "fake" movie, basic verzija da ne bi bacao error
    id: 0,
    name: '',
    yearOfFound: '',
    country: '',
    owner: '',
    colors: '',
    pictureOfLogo: '',
    stadium: this.stadium,
  }; //To znaci da je sad movie ulaznbi parametar za komponentu, koristi se kao [movie], on je postao property
  constructor() {}

  ngOnInit(): void {}

  display = false;
  showStadium() {
    this.display = !this.display;
  }
}
